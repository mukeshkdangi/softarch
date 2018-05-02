package edu.usc.softarch.LevelOnePojo;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Dependency {
    private String nameOfCategory;
    private Integer count;
}
