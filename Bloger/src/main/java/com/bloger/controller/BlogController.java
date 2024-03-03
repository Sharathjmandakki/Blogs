package com.bloger.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bloger.entity.Blogs;
import com.bloger.services.BlogService;

import jakarta.servlet.http.HttpSession;
@CrossOrigin("*")
@RestController
public class BlogController {
	@Autowired
	BlogService bs;

	@PostMapping("/addblog")
	public String addBlog(@RequestBody Blogs b) {
		return bs.addBlog(b);
	}
	@PutMapping("/updateblog")
	public String updateBlog(@RequestBody Blogs b) {
		return bs.updateBlog(b);
	}

	@GetMapping("/viewblogs")
	public List<Blogs> viewBlogs() {
		return bs.viewBlogs();
	}
	@GetMapping("/myblogs")
	public List<Blogs> myBlogs() {
		return bs.viewMyBlogs();
	}
	
	@GetMapping("/category")
	public List<String> viewByCategory(){
		List<String> l=bs.viewByCategory();		
		return l;
	}
	@GetMapping
	public List<Blogs> viewByTitleOrArtist(@RequestParam String messageTitle){
		return bs.viewByTitleOrUploadBy(messageTitle);
	}
	@PostMapping("/search")
	public List<Blogs> viewByArtistOrTitle(@RequestBody Blogs b){
		return bs.viewByTitleOrUploadBy(b.getMessageTitle());
	}
	@DeleteMapping("/delete")
	public String delete(@RequestBody Blogs b ) {
		return bs.deleteBlog(b);
	}
	
	@PutMapping("/likes")
	public void likeit(@RequestBody Blogs b) {
		bs.likes(b);
	}
	@PutMapping("/unlikes")
	public void unLikeit(@RequestBody Blogs b) {
		bs.unlikes(b);
	}
	@PostMapping("/checkuser")
	public demo checkUser(@RequestBody Blogs b) {
		demo d=new demo();
		if(bs.checkUser(b)) {
			d.SetDemo(1);
		return d;
		}else {
			d.SetDemo(0);
			return d;
		}
	}
}


class demo{
	public int check;
	demo(){
		
	}
	public void SetDemo(int check) {
		this.check=check;
	}
}