package com.kyeonjuk.video_streaming;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class VideoStreamingApplication {

	public static void main(String[] args) {
		SpringApplication.run(VideoStreamingApplication.class, args);
		System.out.println("http://localhost:8080/main");
		System.out.println("http://localhost:8080/index");
		System.out.println("http://localhost:8080/mySubscriptions");
		System.out.println("http://localhost:8080/channel");
		System.out.println("http://localhost:8080/uploadVideo");
		System.out.println("http://localhost:8080/myPage");
		System.out.println("http://localhost:8080/register");
		System.out.println("http://localhost:8080/login");
		System.out.println("http://localhost:8080/updateProfile");
	}

}
