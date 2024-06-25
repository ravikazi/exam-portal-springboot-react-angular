package com.exam.examspringsever.services.impl;

import com.exam.examspringsever.helpers.UserFoundException;
import com.exam.examspringsever.models.User;
import com.exam.examspringsever.models.UserRole;
import com.exam.examspringsever.repositories.RoleRepository;
import com.exam.examspringsever.repositories.UserRepository;
import com.exam.examspringsever.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public User addUser(User user, Set<UserRole> userRoles) throws Exception {
        User local = userRepository.findUserByUsername(user.getUsername());
        if (local!=null)
        {
            System.out.println("User is  already there!!");
            throw new UserFoundException("User already registered");
        }else{
            //Create User and assign a role
            for (UserRole ur:userRoles)
            {
                roleRepository.save(ur.getRole());
            }
            user.setProfile("default-profile.png");
            user.getUserRoles().addAll(userRoles);
            local = this.userRepository.save(user);
        }
        return local;
    }

    @Override
    public User getUser(String username) {
        return this.userRepository.findUserByUsername(username);
    }

    @Override
    public void deleteUser(Long userId) {
        this.userRepository.deleteById(userId);
    }
}
