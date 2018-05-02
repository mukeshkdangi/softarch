package edu.usc.softarch;

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

    private Map<String, String> clusterMap = new HashMap<>();
    private Map<String, Map<String, String>> dependencMap = new HashMap<>();
    private Map<String, Map<String, Integer>> levelOneMap = new HashMap<>();

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
    public Map<String, String> createClusterInfo() {

        try {
            File file = new File(clusters_fn);
            List<String> lines = FileUtils.readLines(file);


            lines.stream().forEach(str -> {

                String[] depenArray = str.split(" ");
                String filePath = depenArray[2];
                String fileName = filePath.substring(filePath.lastIndexOf("/") + 1).replace(".java", "");
                clusterMap.put(fileName, depenArray[1]);
                System.out.println(clusterMap);

            });
        } catch (Exception e) {
        }
        return clusterMap;
    }

    /**
     * @return
     */
    public Map<String, Map<String, Integer>> CreateLevelOneMap() {

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
        return levelOneMap;

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
            type = clusterMap.get(fileName);
            System.out.println(clusterMap);
        }
        return type;
    }
}
