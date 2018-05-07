package edu.usc.softarch;

import edu.usc.softarch.LevelOnePojo.Category;
import edu.usc.softarch.WordCloudPojo.WordCloudInfo;
import edu.usc.softarch.levelTwoPojo.FileTypeMap;
import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.Map;

/**
 * @Author : Mukesh Dangi
 */

@Builder
@Data
public class VisInformation {
    private List<Category> levelOne;
    private List<FileTypeMap> levelTwo;
    private List<WordCloudInfo> cloudInfo;
}
