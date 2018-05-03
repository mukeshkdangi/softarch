package edu.usc.softarch.LevelOnePojo;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class LevelOneInfo {
    List<Category> levelOne;
}
