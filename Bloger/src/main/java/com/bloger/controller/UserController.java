package com.bloger.controller;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.bloger.entity.Users;
import com.bloger.services.UserService;

import jakarta.servlet.http.HttpSession;
@CrossOrigin("*")
@RestController
public class UserController {
	@Autowired
	UserService us;
	HttpSession hs;
	@PostMapping("/adduser")
	public String addUser(@RequestBody Users u) {
		return us.addUser(u);
	}
	@PostMapping("/login")
	public String login( @RequestBody Users u,HttpSession hs ) {
		this.hs=hs;
		hs.setAttribute("email", u.getEmail().toString());
//		Users user=us.getuser(u.getEmail());
//		hs.setAttribute("user", user);
		return us.login(u.getEmail(), u.getPassword());
	}
	
	public String user() {
		if(hs!=null) {
		return hs.getAttribute("email").toString();
		}else {
			return "unknown";
		}
		
	}
}
