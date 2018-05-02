package edu.usc.softarch.LevelOnePojo;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Builder
@Data
public class CategoryList {
    private String category;
    private List<Dependency> dependency;
}
