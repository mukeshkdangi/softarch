package edu.usc.softarch;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Dependency {
    private String nameOfCategory;
    private Integer count;
}
