package edu.usc.softarch;


import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import com.google.gson.Gson;

/**
 * @author Mukesh Dangi
 */


@RestController
public class VisController {

    @RequestMapping("/")
    public String welcome(Map<String, Object> model) {

        return "welcome";
    }

    @PostMapping(value = "/saveDetails") // it only support port method
    public String saveDetails(ModelMap modelMap, HttpServletRequest httpRe) {


        modelMap.put("trainerID", "Success");

        return "viewDetails"; // welcome is view name. It will call welcome.jsp
    }

    @RequestMapping(value = "/getVisDetails", method = RequestMethod.GET)
    public void getTrainingScheduleLink() throws IOException {
        new VisProcessorImpl().init();
    }

}
