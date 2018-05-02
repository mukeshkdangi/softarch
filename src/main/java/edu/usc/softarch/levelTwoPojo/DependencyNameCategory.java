package edu.usc.softarch.levelTwoPojo;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DependencyNameCategory {

    private String name;
    private String category;
}
