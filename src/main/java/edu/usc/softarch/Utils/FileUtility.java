package edu.usc.softarch.Utils;

import java.io.File;
import java.nio.file.Files;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

public class FileUtility {
    /**
     * @param fileName : File Name With/out full path
     * @param clusterMap
     * @return : File Type : io or sql or graphics
     */
    public static String getFileTypeFromClusterMap(String fileName, Map<String, List<String>> clusterMap) {
        String type = "no_match";
        fileName = fileName.substring(fileName.lastIndexOf(".") + 1);
        if (clusterMap.get(fileName) != null) {
            type = clusterMap.get(fileName).get(1);
        }
        return type;
    }

    /**
     * @param fileName : File Name Without full path
     * @param clusterMap
     * @return : Full file : src/edu/usc/FileA.java
     */
    public static String getFilePathFromClusterMap(String fileName, Map<String, List<String>> clusterMap) {
        String fullPath = fileName;
        fileName = fileName.substring(fileName.lastIndexOf(".") + 1);
        if (clusterMap.get(fileName) != null) {
            fullPath = clusterMap.get(fileName).get(0);
        }
        return fullPath;
    }

    /**
     * @param file : File with Full Path
     * @return : Number of
     */
    public static int getLineCount(File file) {
        try {
            try (Stream<String> lines = Files.lines(file.toPath())) {
                return (int) lines.count();
            }
        } catch (Exception e) {
            // Some files with $ or non num
        }
        return 0;
    }

}
