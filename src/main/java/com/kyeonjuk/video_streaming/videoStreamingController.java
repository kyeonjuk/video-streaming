package com.kyeonjuk.video_streaming;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class videoStreamingController {

    @GetMapping("/index")
    public String index() {
        return "index";
    }

    @GetMapping("/main")
    public String mainTest() {
        return "main";
    }
}
