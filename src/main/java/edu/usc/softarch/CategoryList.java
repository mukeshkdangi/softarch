package edu.usc.softarch;

import lombok.Builder;

import java.util.List;

@Builder
public class CategoryList {
    private String category;
    private List<Dependency> dependency;
}
