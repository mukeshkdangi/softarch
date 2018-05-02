package edu.usc.softarch.levelTwoPojo;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FileTypeMap {
    private  String name;
    private ClusterNames clusterNames;

}
