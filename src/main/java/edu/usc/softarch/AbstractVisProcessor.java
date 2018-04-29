package edu.usc.softarch;

import java.util.Map;

/**
 * @Author : Mukesh Dangi
 */

public abstract class AbstractVisProcessor {

    public  abstract void preprocess();

    public  abstract void process();

    public  abstract Map<String, Map<String, Integer>> postprocess();


}
