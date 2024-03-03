package com.bloger.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bloger.controller.UserController;
import com.bloger.entity.Blogs;
import com.bloger.entity.Users;
import com.bloger.repositories.BlogRepository;
import com.bloger.repositories.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class BlogService implements BlogInterface {
	@Autowired
	BlogRepository br;
	@Autowired
	UserRepository ur;
	UserController uc;

	public BlogService(UserController uc) {
		// TODO Auto-generated constructor stub
		this.uc = uc;
	}

	@Override
	public String addBlog(Blogs b) {
		Users u = ur.findByEmail(uc.user());
		b.setUploadBy(u.getUsername());
		br.save(b);
//		List<Blogs> mb = u.getMyBlogs();
//		mb.add(b);
//		u.setMyBlogs(mb);
//		ur.save(u);
		return "blog added";
	}

	@Override
	public List<Blogs> viewBlogs() {
		// TODO Auto-generated method stub
		return br.findAll();
	}

	@Override
	public List<Blogs> viewMyBlogs() {
		// TODO Auto-generated method stub
		try {
			Users u = ur.findByEmail(uc.user());
			return br.findByUploadBy(u.getUsername());
		} catch (Exception e) {
			// TODO: handle exception
			return br.findByUploadBy("unknown");
		}
		
	}

	@Override
	public List<String> viewByCategory() {
		String arr[] = { "Food blogs", "Travel blogs", "Health and fitness blogs", "Lifestyle blogs",
				"Fashion and beauty blogs", "Photography blogs", "Personal blogs", "DIY craft blogs", "Parenting blogs",
				"Music blogs", "Business blogs", "Art and design blogs", "Book and writing blogs",
				"Personal finance blogs", "Interior design blogs", "Sports blogs", "News blogs", "Movie blogs",
				"Religion blogs", "Political blogs" };
		List<String> al = new ArrayList<>();
		for (String a : arr) {
			al.add(a);
		}
		return al;
	}

	@Override
	public List<Blogs> viewByTitleOrUploadBy(String messageTitle) {
		List<Blogs> b = br.findByUploadBy(messageTitle);
		b.addAll(br.findByMessageTitle(messageTitle));
		b.addAll(br.findByCategory(messageTitle));
		return b;
	}

	@Override
	public String updateBlog(Blogs b) {
		Blogs ub = viewBlog(b.getId());
		ub.setMessageTitle(b.getMessageTitle());
		ub.setMessageBody(b.getMessageBody());
		ub.setUploadTime(b.getUploadTime());
		br.save(ub);
		return "blog Updated";
	}

	@Override
	public Blogs viewBlog(int id) {
		return br.findById(id).get();
	}

	// deleting Blog
	@Transactional
	public String deleteBlog(Blogs b) {
		try {
			br.deleteById(b.getId());
			return "deleted";

		} catch (Exception e) {
			br.delete(b);
			return "Error";
		}
	}
	
	@Override
	public void likes(Blogs b) {
		List<Blogs> blogs=br.findByMessageTitle(b.getMessageTitle());
		Blogs blog=blogs.get(0);
		if(blog.getCategory().equals(b.getCategory())){
			blog.setLikes(b.getLikes());
			List<Users> u=blog.getLikedUsers();
			u.add(ur.findByEmail(uc.user()));
			br.save(blog);
		}
	}
	
	@Override
	public void unlikes(Blogs b) {
		List<Blogs> blogs=br.findByMessageTitle(b.getMessageTitle());
		Blogs blog=blogs.get(0);
		if(blog.getCategory().equals(b.getCategory())){
			blog.setLikes(b.getLikes());
			List<Users> u=blog.getLikedUsers();
			u.remove(ur.findByEmail(uc.user()));
			br.save(blog);
		}
	}
	@Override
	public boolean checkUser(Blogs b) {
		Blogs blog=br.findByMessageTitle(b.getMessageTitle()).get(0);
		Users u=ur.findByEmail(uc.user());
		List<Users> lu=blog.getLikedUsers();
		for(Users user:lu) {
			if(user.equals(u)) {
				return true;
			}
		}
		return false;
	}
}
