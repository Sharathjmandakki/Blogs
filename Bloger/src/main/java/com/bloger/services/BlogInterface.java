package com.bloger.services;

import java.util.List;

import com.bloger.entity.Blogs;

public interface BlogInterface {
String addBlog(Blogs b);
List<Blogs> viewBlogs();
List<String> viewByCategory();
List<Blogs> viewByTitleOrUploadBy(String search);
List<Blogs> viewMyBlogs();
String updateBlog(Blogs b);
Blogs viewBlog(int id);
String deleteBlog(Blogs b);
void likes(Blogs b);
void unlikes(Blogs b);
boolean checkUser(Blogs b);
}
