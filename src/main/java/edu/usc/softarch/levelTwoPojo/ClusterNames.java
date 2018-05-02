package edu.usc.softarch.levelTwoPojo;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ClusterNames {
    private String nameOfCluster;
    private List<ListOfFiles> listOfFiles;

}
