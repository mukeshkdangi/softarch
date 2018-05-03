package edu.usc.softarch;

import java.util.Map;

/**
 * @Author : Mukesh Dangi
 */

public abstract class AbstractVisProcessor {

    public  abstract void preprocess(String s1, String s2);

    public  abstract void process();

    public  abstract VisInformation postprocess();


}
