package edu.usc.softarch;

import edu.usc.softarch.UMLDiagram.ClassDiagram;

/**
 * @Author : Mukesh Dangi
 */
public class VisProcessorImpl extends AbstractVisProcessor {

    private VisualizationEngine visDetailsIns = new VisualizationEngine();

    private String depedency_files;
    private String cluster_dep_files;

    public VisInformation init(String dependency_file, String cluster_dep_file) {
        this.preprocess(dependency_file, cluster_dep_file);
        this.process();
        return this.postprocess();
    }

    @Override
    public void preprocess(String dependency_file, String cluster_dep_file) {
        visDetailsIns.init(depedency_files, cluster_dep_files);
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
