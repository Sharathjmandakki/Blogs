package com.bloger.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.Random;

@Entity
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String username;
	private String email;
	private String password;
	private String role;
	private String userDp;
//	@OneToMany(cascade = CascadeType.ALL)
//	private List<Blogs> myBlogs;
	@OneToMany
	private List<Blogs> favoriteBlogs;
	private final String apikey=Generateapi();//i am not using API key know..!

	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Users(int id, String username, String email, String password, String role, String userDp,
			List<Blogs> myBlogs, List<Blogs> favoriteBlogs) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
		this.role = role;
		this.userDp = userDp;
//		this.myBlogs = myBlogs;
		this.favoriteBlogs = favoriteBlogs;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getuserDp() {
		return userDp;
	}

	public void setuserDp(String userDp) {
		this.userDp = userDp;
	}

//	public List<Blogs> getMyBlogs() {
//		return myBlogs;
//	}
//
//	public void setMyBlogs(List<Blogs> myBlogs) {
//		this.myBlogs = myBlogs;
//	}

	public List<Blogs> getFavoriteBlogs() {
		return favoriteBlogs;
	}

	public void setFavoriteBlogs(List<Blogs> favoriteBlogs) {
		this.favoriteBlogs = favoriteBlogs;
	}

	public String getApikey() {
		return apikey;
	}

	@Override
	public String toString() {
		return "Users [id=" + id + ", username=" + username + ", email=" + email + ", password=" + password + ", role="
				+ role + ", userDp=" + userDp +", favoriteBlogs=" + favoriteBlogs
				+ ", apikey=" + apikey + "]";
	}

	private static String Generateapi() {
		final int leftLimit = 48; // numeral '0'
		final int rightLimit = 122; // letter 'z'
		final int targetStringLength = 20;
		final Random random = new Random();
			return random.ints(leftLimit, rightLimit + 1).filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97)).limit(targetStringLength).collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append).toString();
	}

}
