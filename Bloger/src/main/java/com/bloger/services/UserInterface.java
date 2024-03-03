package com.bloger.services;

import com.bloger.entity.Users;

public interface UserInterface {
String addUser(Users u);
String login(String email,String password);

}
