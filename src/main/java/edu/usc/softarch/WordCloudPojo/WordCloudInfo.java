package edu.usc.softarch.WordCloudPojo;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class WordCloudInfo {
    private String name;
    private String category;
}
