package com.exam.examspringsever.services;

import com.exam.examspringsever.models.User;
import com.exam.examspringsever.models.UserRole;

import java.util.Set;

public interface UserService {

    //Create user
    public User addUser(User user, Set<UserRole> userRoles) throws Exception;

    //Find User
    public User getUser(String username);

    //Delete User
    public void deleteUser(Long userId);
}
