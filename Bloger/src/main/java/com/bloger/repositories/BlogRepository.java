package com.bloger.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bloger.entity.Blogs;

import jakarta.persistence.Query;

import java.util.List;


public interface BlogRepository extends JpaRepository<Blogs, Integer>{
	List<Blogs> findByCategory(String category);
	List<Blogs> findByUploadBy(String uploadBy);
	List<Blogs> findByMessageTitle(String messageTitle);
	
}
