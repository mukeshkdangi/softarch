package edu.usc.softarch;


import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
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

    @PostMapping(value = "/saveDetails") // it only support port method
    public String saveDetails(ModelMap modelMap, HttpServletRequest httpRe) {


        modelMap.put("trainerID", "Success");

        return "viewDetails"; // welcome is view name. It will call welcome.jsp
    }

    @GetMapping(value = "/getLevelOneDetails")
    public Map<String, Map<String, Integer>> getLevelOne(){
        return new VisProcessorImpl().init("","");
    }

}
