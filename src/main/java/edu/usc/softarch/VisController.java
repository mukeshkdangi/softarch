package edu.usc.softarch;


import com.google.gson.Gson;
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


    @GetMapping(value = "/getLevelOneDetails")
    public String getLevelOne() {
        return new Gson().toJson(new VisProcessorImpl().init("", ""));
    }

}
