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

    @GetMapping("/mySubscriptions")
    public String mySubscriptions() {
        return "mySubscriptions";
    }

    @GetMapping("/channel")
    public String channel() {
        return "channel";
    }

    @GetMapping("/uploadVideo")
    public String uploadVideo() {
        return "uploadVideo";
    }

    @GetMapping("/myPage")
    public String myPage() {
        return "myPage";
    }

    @GetMapping("/register")
    public String register() {
        return "register";
    }
}
