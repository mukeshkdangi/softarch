package edu.usc.softarch.levelTwoPojo;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ListOfFiles {
    private String name;
    private List<DependencyNameCategory> inputDeps;
    private List<DependencyNameCategory> outputDeps;

    private String pathToFile;
    private Integer linesOfCode;
    private String category;

    private Double fileSize;
    private boolean vulnerable;

}
