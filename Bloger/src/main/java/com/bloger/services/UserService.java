package com.bloger.services;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bloger.entity.Users;
import com.bloger.repositories.UserRepository;

import jakarta.servlet.http.HttpSession;

@Service
public class UserService implements UserInterface {
	@Autowired
	UserRepository ur;

	@Override
	public String addUser(Users u) {
		System.out.println(u);
		// TODO Auto-generated method stub
		if (ur.findByEmail(u.getEmail()) != null&&ur.findByUsername(u.getUsername()) != null) {
			return " this email or username already exist try to login";
		} else {
			ur.save(u);
			return "User added";
		}
	}

	@Override
	public String login(String email, String password) {
		if(ur.findByEmail(email)==null) {
			return " try to register this email dosent exist "+email;
		}else {
			Users u=ur.findByEmail(email);
			if(u.getPassword().equals(password)) {
				return "successfull";
			}else {
				return "Plese enter the correct password";
			}
		}
	}

	public Users getuser(String email) {
		// TODO Auto-generated method stub
		return ur.findByEmail(email);
	}
}
