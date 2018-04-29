package edu.usc.softarch;

/**
 * @Author : Mukesh Dangi
 */

public class VisProcessorImpl extends AbstractVisProcessor {

    public void init() {
        this.preprocess();
        this.process();
        this.postprocess();
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
    public void postprocess() {

    }
}
