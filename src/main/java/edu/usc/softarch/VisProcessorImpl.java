package edu.usc.softarch;

/**
 * @Author : Mukesh Dangi
 */
public class VisProcessorImpl extends AbstractVisProcessor {

    private VisualizationEngine visDetailsIns = new VisualizationEngine();

    public VisInformation init(String dependency_file, String cluster_dep_file) {
        this.preprocess(dependency_file, cluster_dep_file);
        this.process();
        return this.postprocess();
    }

    @Override
    public void preprocess(String dependency_file, String cluster_dep_file) {
        visDetailsIns.init(dependency_file, cluster_dep_file);
    }

    @Override
    public void process() {
        //   new ClassDiagram().createClusterInfoForUML();
        visDetailsIns.createClusterInfo();
        visDetailsIns.createDependencyInfo();
    }

    @Override
    public VisInformation postprocess() {
        return visDetailsIns.CreateLevelMap();
    }
}
