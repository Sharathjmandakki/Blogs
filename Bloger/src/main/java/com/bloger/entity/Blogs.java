package com.bloger.entity;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
@Entity
public class Blogs {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String messageTitle;
	@Lob
	@Column( length = 100000 )
	private String messageBody;
	private String category;
	private String image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg";
	private String uploadTime=LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm"));;
	private String uploadBy;
	@ManyToMany
	private List<Users> likedUsers;
	int likes=0;
	
	public Blogs() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Blogs(int id, String messageTitle, String messageBody, String category, String image,int likes,List<Users> likedUsers) {
		super();
		this.id = id;
		this.messageTitle = messageTitle;
		this.messageBody = messageBody;
		this.category = category;
		this.image = image;
		this.likes=likes;
		this.likedUsers=likedUsers;
		if(image.equals("")||image==null) {
			this.image="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg";
		}
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMessageTitle() {
		return messageTitle;
	}

	public void setMessageTitle(String messageTitle) {
		this.messageTitle = messageTitle;
	}

	public String getMessageBody() {
		return messageBody;
	}

	public void setMessageBody(String messageBody) {
		this.messageBody = messageBody;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}


	public String getUploadTime() {
		return uploadTime;
	}

	public void setUploadTime(String uploadTime) {
		this.uploadTime = uploadTime;
	}

	public String getUploadBy() {
		return uploadBy;
	}

	public void setUploadBy(String uploadBy) {
		this.uploadBy = uploadBy;
	}
	public int getLikes() {
		return likes;
	}
	public void setLikes(int likes) {
		this.likes = likes;
	}

	public List<Users> getLikedUsers() {
		return likedUsers;
	}

	public void setLikedUsers(List<Users> likedUsers) {
		this.likedUsers = likedUsers;
	}

	@Override
	public String toString() {
		return "Blogs [id=" + id + ", messageTitle=" + messageTitle + ", messageBody=" + messageBody + ", category="
				+ category + ", image=" + image + ", uploadTime=" + uploadTime + ", uploadBy=" + uploadBy
				+ ", likedUsers=" + likedUsers + ", likes=" + likes + "]";
	}

}
