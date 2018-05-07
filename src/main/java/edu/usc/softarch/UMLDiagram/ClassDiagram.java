package edu.usc.softarch.UMLDiagram;

import lombok.Data;
import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Executors;

@Data
public class ClassDiagram {

    private Map<String, String> clusterMap = new HashMap<>();

    /**
     * @return
     */
    public Map<String, String> createClusterInfoForUML() {

        try {
            File file = new File("/Users/mukesh/Desktop/log4j-api_relax_clusters_fn.rsf");
            //S3Manager.getFileFromS3("log4j-api_relax_clusters_fn.rsf");
            List<String> lines = FileUtils.readLines(file);

            lines.forEach(str -> {

                String[] depenArray = str.split(" ");
                String filePath = depenArray[2];
                String fileName = filePath.substring(filePath.lastIndexOf("/") + 1).replace(".java", "");
                clusterMap.put(fileName, filePath);
                ProcessBuilder builder = new ProcessBuilder();
                builder.command("/Users/mukesh/MyRepos/robinbird/build/distributions/robinbird/bin/robinbird", "-r", filePath, ">", fileName, ".txt");

                String[] command = {"/Users/mukesh/MyRepos/robinbird/build/distributions/robinbird/bin/robinbird", "-r", filePath,  " > ", fileName, ".txt"};
                try {
                    Runtime.getRuntime().exec(command);
                } catch (IOException e) {
                    e.printStackTrace();
                }

                //this.executeShellCommand(builder);

                builder = new ProcessBuilder();
                builder.command("java", "-jar", "/Users/mukesh/Downloads/plantuml.1.2018.5.jar", fileName, ".txt");
                String[] command2 = {"java -jar /Users/mukesh/Downloads/plantuml.1.2018.5.jar", fileName, ".txt"};

                try {
                    Runtime.getRuntime().exec(command2);
                } catch (IOException e) {
                    e.printStackTrace();
                }
                this.executeShellCommand(builder);


            });
        } catch (Exception e) {
            e.printStackTrace();
        }
        return clusterMap;
    }

    private void executeShellCommand(ProcessBuilder builder) {
        try {
            builder.directory(new File(System.getProperty("user.dir")));
            Process process = builder.start();
            //builder.directory(new File(System.getProperty("user.dir"))).start();
            int exitCode = process.waitFor();
            assert exitCode == 0;
        } catch (Exception e) {
            e.printStackTrace();
        }

    }


}
