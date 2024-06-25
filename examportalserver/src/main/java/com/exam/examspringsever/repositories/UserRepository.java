package com.exam.examspringsever.repositories;

import com.exam.examspringsever.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    public User findUserByUsername(String username);
}
