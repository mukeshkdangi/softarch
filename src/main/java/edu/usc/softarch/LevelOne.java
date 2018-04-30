package edu.usc.softarch;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class LevelOne {
   private List<CategoryList> categoryList;
}
