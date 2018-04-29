package edu.usc.softarch;

import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class VisDetails {

    private static String dep_fileName = "/Users/mukesh/Desktop/RELAX_log4j_2.7_1.0.0a/log4j-api_deps.rsf";

    private static String clusters_fn = "/Users/mukesh/Desktop/RELAX_log4j_2.7_1.0.0a/log4j-api_deps.rsf";

    private static Map<String, String> clusterMap = new HashMap<>();
    private static Map<String, List<String>> dependencMap = new HashMap<>();
    private static Map<String, Map<String, Integer>> levelOneMap = new HashMap<>();



    public static  Map<String, List<String>>  getDependencyInfo() throws IOException {

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
            System.out.println(dependencMap);

        });
        getClusterInfo(dependencMap);

        return dependencMap;
    }


    public static  Map<String, String>  getClusterInfo( Map<String, List<String>> dependencMap ) throws IOException {

        File file = new File(clusters_fn);
        List<String> lines = FileUtils.readLines(file);


        lines.stream().forEach(str -> {

            System.out.println(str);

            String[] depenArray = str.split(" ");
            String filePath = depenArray[2];
            filePath = filePath.substring(filePath.lastIndexOf("/")+1).replace(".java","");
            clusterMap.put(filePath, depenArray[1]);
            System.out.println(clusterMap);

        });

        return clusterMap;
    }





}
