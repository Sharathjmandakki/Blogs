package com.bloger.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bloger.entity.Blogs;
import com.bloger.entity.Users;
import java.util.List;


public interface UserRepository extends JpaRepository<Users, Integer>{
	Users findByEmail(String email);
	Users findByUsername(String username);
	
}
