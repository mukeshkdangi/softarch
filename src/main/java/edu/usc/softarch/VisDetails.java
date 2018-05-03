package edu.usc.softarch;

import com.google.gson.Gson;
import edu.usc.softarch.LevelOnePojo.Category;
import edu.usc.softarch.LevelOnePojo.Dependency;
import edu.usc.softarch.LevelOnePojo.LevelOneInfo;
import edu.usc.softarch.levelTwoPojo.*;
import org.apache.commons.io.FileUtils;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * @Author : Mukesh Dangi
 */
public class VisDetails {

    private static String dep_fileName = "/Users/mukesh/Desktop/RELAX_log4j_2.7_1.0.0a/log4j-api_deps.rsf";

    private static String clusters_fn = "/Users/mukesh/Desktop/RELAX_log4j_2.7_1.0.0a/log4j-api_relax_clusters_fn.rsf";
    // public String dep_fileName;
    // public String clusters_fn;
    /**
     * dependencMap : fileA -> {File B: File B type}
     * clusterMap : File A name without path->> {File A Name without path, file A type}
     */

    private Map<String, List<String>> clusterMap = new HashMap<>();
    private Map<String, Map<String, String>> dependencMap = new HashMap<>();
    private Map<String, Map<String, Integer>> levelOneMap = new HashMap<>();
    /**
     * Level 3 Map {File Category Key -> {List of Maps  {File 1 -> type}}}
     */
    private Map<String, List<Map<String, String>>> levelTwoMap = new HashMap<>();

    /**
     * @param depedency_file
     * @param cluster_dep_file
     */

    public void init(String depedency_file, String cluster_dep_file) {

        //  this.dep_fileName = depedency_file;
        // this.clusters_fn = cluster_dep_file;


        clusterMap = new HashMap<>();
        dependencMap = new HashMap<>();
        levelOneMap = new HashMap<>();
    }

    /**
     * @return
     */
    public Map<String, Map<String, String>> createDependencyInfo() {
        try {

            File file = new File(dep_fileName);
            List<String> lines = FileUtils.readLines(file);


            lines.stream().forEach(str -> {

                System.out.println(str);

                String[] depenArray = str.split(" ");
                Map<String, String> innerDepMap;
                Map<String, String> typeCountMap;

                if (dependencMap.get(depenArray[1]) == null) {
                    innerDepMap = new HashMap<>();
                    typeCountMap = new HashMap<>();
                } else {
                    innerDepMap = dependencMap.get(depenArray[1]);
                }
                String fileTypeLocal = getFileTypeFromClusterMap(depenArray[2]);
                innerDepMap.put(depenArray[2], fileTypeLocal);
                dependencMap.put(depenArray[1], innerDepMap);
            });

        } catch (Exception e) {
        }

        return dependencMap;
    }

    /**
     * @return
     */
    public Map<String, List<String>> createClusterInfo() {

        try {
            File file = new File(clusters_fn);
            List<String> lines = FileUtils.readLines(file);

            lines.stream().forEach(str -> {

                String[] depenArray = str.split(" ");
                String filePath = depenArray[2];
                String fileName = filePath.substring(filePath.lastIndexOf("/") + 1).replace(".java", "");
                List<String> fileFullPathType = new ArrayList<>();
                fileFullPathType.add(filePath);
                fileFullPathType.add(depenArray[1]);
                clusterMap.put(fileName, fileFullPathType);
                System.out.println(clusterMap);

            });
        } catch (Exception e) {
        }
        return clusterMap;
    }

    /**
     * @return
     */
    public Map<String, Map<String, Integer>> CreateLevelMap() {

        LevelTwoInfo levelTwoInfo = LevelTwoInfo.builder().build();
        List<FileTypeMap> listOfLevelTwoInfo = new ArrayList<>();

        // Level 1

        LevelOneInfo levelOneInfo = LevelOneInfo.builder().build();
        List<Category> levelOne = new ArrayList<>();
        System.out.println("dependencMap" + dependencMap);

        dependencMap.forEach((key, value) -> {
            List<Dependency> dependencyList = new ArrayList<>();
            String keyString = key;
            String fileName = keyString.substring(keyString.lastIndexOf(".") + 1);
            Map<String, String> depencyFiles = value;

            String fileType = getFileTypeFromClusterMap(fileName);

            Map<String, Integer> typeCountMap = new HashMap<>();

            if (levelOneMap.get(fileType) != null) {
                typeCountMap = levelOneMap.get(fileType);
            }
            levelOneMap.put(fileType, updateFileTypeCount(depencyFiles, typeCountMap));


            /**
             * Level 3 Starts Here
             */
            //TODO
            //DependencyNameCategory inputDeps = DependencyNameCategory.builder().category(fileType).name(fileName).build();
            //DependencyNameCategory outputDeps = DependencyNameCategory.builder().category(fileType).name(fileName).build();
            List<DependencyNameCategory> inputDeps = new ArrayList<>();
            List<DependencyNameCategory> outputDeps = new ArrayList<>();

            //TODO
            ListOfFiles filesDetails = ListOfFiles.builder().linesOfCode(100).category(fileType).fileSize(100.00).
                    inputDeps(inputDeps).outputDeps(outputDeps).
                    pathToFile("file_path").vulnerable(true).build();
            List<ListOfFiles> listOfFiles = new ArrayList<>();
            listOfFiles.add(filesDetails);

            String nameOfCluster = "";
            ClusterNames clusterNames = ClusterNames.builder().nameOfCluster(nameOfCluster).listOfFiles(listOfFiles).build();
            FileTypeMap fileTypeMap = FileTypeMap.builder().name(fileName).clusterNames(clusterNames).build();
            listOfLevelTwoInfo.add(fileTypeMap);

        });

        /**
         * Level 1
         */

        levelOneMap.forEach((key, value) -> {
            List<Dependency> dependencyList = new ArrayList<>();
            Map<String, Integer> countMap = new HashMap<>();
            value.forEach((fileName, dependencyCount) -> {
                
                Integer fileCount = countMap.get("counts");
                countMap.put("counts", fileCount == null ? dependencyCount : (fileCount + dependencyCount));
                Dependency dependencyInfo = Dependency.builder().count(dependencyCount).nameOfCategory(fileName).build();
                dependencyList.add(dependencyInfo);
            });

            Category category = Category.builder().category(key).numberOfFiles(countMap.get("counts")).dependency(dependencyList).build();
            levelOne.add(category);
        });
        levelOneInfo.setLevelOne(levelOne);
        levelTwoInfo.setFileTypeMaps(listOfLevelTwoInfo);

        System.out.println("*******************Level 1111111111********************");
        System.out.println(new Gson().toJson(levelOne));

        System.out.println("******************** Level 33333333333*******************");
        System.out.println(new Gson().toJson(levelTwoInfo));
        return levelOneMap;

    }

    /**
     * @param dependencyList
     * @param levelOneMap
     * @param fileType
     * @return
     */
    private List<Dependency> getDependencyList(List<Dependency> dependencyList, Map<String, Map<String, Integer>> levelOneMap, String fileType) {
        levelOneMap.get(fileType).forEach((key, value) -> {
            Dependency dependencyInfo = Dependency.builder().count(value).nameOfCategory(key).build();
            dependencyList.add(dependencyInfo);
        });
        return dependencyList;
    }

    /**
     * @param depencyFiles
     * @param typeCountMap
     * @return
     */
    private Map<String, Integer> updateFileTypeCount(Map<String, String> depencyFiles, Map<String, Integer> typeCountMap) {


        new ArrayList<String>(depencyFiles.keySet()).stream().forEach(file -> {


            file = file.substring(file.lastIndexOf(".") + 1);
            String fileTypeLocal = getFileTypeFromClusterMap(file);

            if (typeCountMap.get(fileTypeLocal) == null) {
                typeCountMap.put(fileTypeLocal, 1);
            } else {
                typeCountMap.put(fileTypeLocal, typeCountMap.get(fileTypeLocal) + 1);
            }

        });
        return typeCountMap;
    }

    /**
     * @param fileName
     * @return
     */
    public String getFileTypeFromClusterMap(String fileName) {
        String type = "no_match";
        if (clusterMap.get(fileName) != null) {
            type = clusterMap.get(fileName).get(1);
        }
        return type;
    }
}
