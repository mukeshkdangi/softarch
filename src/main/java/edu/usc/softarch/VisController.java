package edu.usc.softarch;


import com.google.gson.Gson;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * @author Mukesh Dangi
 */


@RestController
public class VisController {
    @RequestMapping("/welcome")
    public String welcome(Map<String, Object> model) {
        return "welcome";
    }


    @GetMapping(value = "/getLevelOneDetails")
    public String getLevelOne(@RequestParam(value = "fileDep", required = false) String dependenct_file, @RequestParam(value = "clusterDep", required = false) String cluster_dep_file) {
        return new Gson().toJson(new VisProcessorImpl().init(dependenct_file, cluster_dep_file));
    }

}
