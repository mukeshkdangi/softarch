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

    private static String clusters_fn = "/Users/mukesh/Desktop/RELAX_log4j_2.7_1.0.0a/log4j-api_deps.rsf";

    private static Map<String, String> clusterMap = new HashMap<>();
    private static Map<String, List<String>> dependencMap = new HashMap<>();
    private static Map<String, Map<String, Integer>> levelOneMap = new HashMap<>();


    public static Map<String, List<String>> createDependencyInfo() {
        try {

            File file = new File(dep_fileName);
            List<String> lines = FileUtils.readLines(file);


            lines.stream().forEach(str -> {

                System.out.println(str);

                String[] depenArray = str.split(" ");
                List<String> depList;
                Map<String, String> typeCountMap;

                if (dependencMap.get(depenArray[1]) == null) {
                    depList = new ArrayList<>();
                    typeCountMap = new HashMap<>();
                } else {
                    depList = dependencMap.get(depenArray[1]);
                }
                depList.add(depenArray[2]);
                dependencMap.put(depenArray[1], depList);
            });

        } catch (Exception e) {
        }

        return dependencMap;
    }


    public static Map<String, String> createClusterInfo() {

        try {
            File file = new File(clusters_fn);
            List<String> lines = FileUtils.readLines(file);


            lines.stream().forEach(str -> {

                System.out.println(str);

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

    public static Map<String, Map<String, Integer>> CreateLevelOneMap() {

        dependencMap.forEach((key, value) -> {

            String keyString = key;
            String fileName = keyString.substring(keyString.lastIndexOf(".") + 1);
            List<String> depencyFiles = value;

            String fileType = getFileTypeFromClusterMap(fileName);

            Map<String, Integer> typeCountMap = new HashMap<>();

            if (levelOneMap.get(fileType) != null) {
                typeCountMap = levelOneMap.get(fileType);
            }

            levelOneMap.put(fileType, updateFileTypeCount(depencyFiles, typeCountMap));


        });
        return levelOneMap;

    }

    private static Map<String, Integer> updateFileTypeCount(List<String> depencyFiles, Map<String, Integer> typeCountMap) {


        depencyFiles.stream().forEach(file -> {


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

    public static String getFileTypeFromClusterMap(String fileName) {
        String type = "no_match";
        if (clusterMap.get(fileName) != null) {
            type = clusterMap.get(fileName);
        }
        return type;
    }
}
