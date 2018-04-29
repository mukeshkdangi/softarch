package edu.usc.softarch;

import java.util.Map;

/**
 * @Author : Mukesh Dangi
 */

public class VisProcessorImpl extends AbstractVisProcessor {

    public Map<String, Map<String, Integer>> init() {
        this.preprocess();
        this.process();
        return this.postprocess();
    }

    @Override
    public void preprocess() {
        VisDetails.createClusterInfo();
        VisDetails.createDependencyInfo();

    }

    @Override
    public void process() {

    }

    @Override
    public Map<String, Map<String, Integer>> postprocess() {
      return  VisDetails.CreateLevelOneMap();
    }
}
