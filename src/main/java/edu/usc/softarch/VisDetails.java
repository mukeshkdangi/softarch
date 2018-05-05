package edu.usc.softarch;

import com.google.gson.Gson;
import edu.usc.softarch.LevelOnePojo.Category;
import edu.usc.softarch.LevelOnePojo.Dependency;
import edu.usc.softarch.levelTwoPojo.*;
import org.apache.commons.io.FileUtils;
import org.springframework.util.CollectionUtils;

import java.io.File;
import java.util.*;
import java.util.logging.Logger;


/**
 * @Author : Mukesh Dangi
 */
public class VisDetails {

    private final static Logger LOGGER = Logger.getLogger(VisDetails.class.getName());

    private static String dep_fileName = "/Users/mukesh/Desktop/RELAX_log4j_2.7_1.0.0a/log4j-api_deps.rsf";

    private static String clusters_fn = "/Users/mukesh/Desktop/RELAX_log4j_2.7_1.0.0a/log4j-api_relax_clusters_fn.rsf";

    /**
     * dependencMap : fileA -> {File B: File B type}
     * clusterMap : File A name without path->> {File A Name without path, file A type}
     */

    private Map<String, List<String>> clusterMap = new HashMap<>();
    private Map<String, Map<String, String>> dependencMap = new HashMap<>();

    private Map<String, Map<String, String>> outDependencMap = new HashMap<>();
    private Map<String, Map<String, Integer>> levelOneMap = new HashMap<>();
    /**
     * Level 3 Map {File Category Key -> {List of Maps  {File 1 -> type}}}
     */
    private Map<String, List<Map<String, String>>> levelTwoMap = new HashMap<>();

    Map<String, List<List<Map<String, String>>>> levelThreeMap = new LinkedHashMap<>();

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
        levelThreeMap = new HashMap<>();
    }

    /**
     * @return
     */
    public Map<String, Map<String, String>> createDependencyInfo() {
        try {

            File file = new File(dep_fileName);
            List<String> lines = FileUtils.readLines(file);


            lines.stream().forEach(str -> {

                String[] depenArray = str.split(" ");
                Map<String, String> innerDepMap;
                innerDepMap = dependencMap.get(depenArray[1]) == null ? new HashMap<>() : dependencMap.get(depenArray[1]);
                String fileTypeLocal = getFileTypeFromClusterMap(depenArray[2]);
                innerDepMap.put(depenArray[2], fileTypeLocal);
                dependencMap.put(depenArray[1], innerDepMap);

                innerDepMap = outDependencMap.get(depenArray[2]) == null ? new HashMap<>() : outDependencMap.get(depenArray[2]);
                fileTypeLocal = getFileTypeFromClusterMap(depenArray[1]);
                innerDepMap.put(depenArray[1], fileTypeLocal);
                outDependencMap.put(depenArray[2], innerDepMap);
            });

        } catch (Exception e) {
            e.printStackTrace();
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
            });
        } catch (Exception e) {
            e.printStackTrace();
        }
        return clusterMap;
    }

    /**
     * @return
     */
    public VisInformation CreateLevelMap() {
        try {

            LevelTwoInfo levelTwoInfo = LevelTwoInfo.builder().build();
            List<FileTypeMap> listOfLevelTwoInfo = new ArrayList<>();

            // Level 1

            List<Category> levelOne = new ArrayList<>();

            dependencMap.forEach((key, value) -> {
                String keyString = key;
                String fileName = keyString.substring(keyString.lastIndexOf(".") + 1);
                Map<String, String> depencyFiles = value;

                String fileType = getFileTypeFromClusterMap(fileName);
                Map<String, Integer> typeCountMap = new HashMap<>();

                if (levelOneMap.get(fileType) != null) {
                    typeCountMap = levelOneMap.get(fileType);
                }
                levelOneMap.put(fileType, updateFileTypeCount(depencyFiles, typeCountMap));

            });


            dependencMap.forEach((key, value) -> {
                List<List<Map<String, String>>> existingLevelMap = new ArrayList<>();

                String keyString = key;
                String fileName = keyString.substring(keyString.lastIndexOf(".") + 1);
                String fileType = getFileTypeFromClusterMap(fileName);
                Map<String, String> inComingDependency = dependencMap.get(key);
                Map<String, String> outGoingDependency = outDependencMap.get(key);

                List<Map<String, String>> totalDependencyMap = new ArrayList<>();
                totalDependencyMap.add(inComingDependency);
                totalDependencyMap.add(outGoingDependency);
                Map<String, String> fileNameType = new HashMap<>();
                fileNameType.put(fileName, fileType);
                totalDependencyMap.add(fileNameType);


                if (levelThreeMap.get(fileType) != null) {
                    existingLevelMap = levelThreeMap.get(fileType);
                    existingLevelMap.add(totalDependencyMap);

                }

                levelThreeMap.put(fileType, existingLevelMap);


            });

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

            /**
             * Level 3 Updates
             */

            System.out.println("levelThreeMap" + levelThreeMap);


            levelThreeMap.forEach((key, value) -> {

                value.forEach(listListofMaps -> {
                    FileTypeMap fileTypeMap = FileTypeMap.builder().build();
                    Map<String, String> inComingDependencies = listListofMaps.get(0);
                    Map<String, String> outGoingDependencies = listListofMaps.get(1);
                    Map<String, String> fileNameAndType = listListofMaps.get(2);

                    List<DependencyNameCategory> listInComingDep = new ArrayList<>();
                    List<DependencyNameCategory> listOutGoingDep = new ArrayList<>();
                    if (!CollectionUtils.isEmpty(inComingDependencies)) {
                        inComingDependencies.forEach((fileName, fileType) -> {
                            DependencyNameCategory inputDeps = DependencyNameCategory.builder().category(fileType).name(fileName).build();
                            listInComingDep.add(inputDeps);
                        });
                    }
                    if (!CollectionUtils.isEmpty(outGoingDependencies)) {
                        outGoingDependencies.forEach((fileName, fileType) -> {
                            DependencyNameCategory outputDeps = DependencyNameCategory.builder().category(fileType).name(fileName).build();
                            listOutGoingDep.add(outputDeps);
                        });
                    }

                    ListOfFiles filesDetails = ListOfFiles.builder().linesOfCode(100).category(key).fileSize(100.00).
                            inputDeps(listInComingDep).outputDeps(listOutGoingDep).
                            pathToFile("file_path").vulnerable(true).build();
                    List<ListOfFiles> listOfFiles = new ArrayList<>();
                    listOfFiles.add(filesDetails);

                    String fileName = fileNameAndType.entrySet().iterator().next().getKey();
                    ClusterNames clusterNames = ClusterNames.builder().nameOfCluster(fileName).listOfFiles(listOfFiles).build();
                    fileTypeMap = fileTypeMap.builder().name(key).clusterNames(clusterNames).build();
                    listOfLevelTwoInfo.add(fileTypeMap);
                });


            });


            System.out.println("******************** Level 33333333333*******************");
            System.out.println(new Gson().toJson(levelTwoInfo));

            return VisInformation.builder().levelOne(levelOne).levelTwo(listOfLevelTwoInfo).build();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;

    }


    /**
     * @param depencyFiles
     * @param typeCountMap
     * @return
     */
    private Map<String, Integer> updateFileTypeCount(Map<String, String> depencyFiles, Map<String, Integer> typeCountMap) {


        new ArrayList<>(depencyFiles.keySet()).stream().forEach(file -> {


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
        fileName = fileName.substring(fileName.lastIndexOf(".") + 1);
        if (clusterMap.get(fileName) != null) {
            type = clusterMap.get(fileName).get(1);
        }
        return type;
    }
}
