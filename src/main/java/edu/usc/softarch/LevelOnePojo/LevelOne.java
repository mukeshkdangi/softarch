package edu.usc.softarch.LevelOnePojo;

import edu.usc.softarch.LevelOnePojo.CategoryList;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class LevelOne {
   private List<CategoryList> categoryList;
}
