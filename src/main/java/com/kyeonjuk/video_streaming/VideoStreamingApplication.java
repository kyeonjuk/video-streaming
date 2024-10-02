package com.kyeonjuk.video_streaming;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class VideoStreamingApplication {

	public static void main(String[] args) {
		SpringApplication.run(VideoStreamingApplication.class, args);
		System.out.println("http://localhost:8080/main");
		System.out.println("http://localhost:8080/index");
	}

}
