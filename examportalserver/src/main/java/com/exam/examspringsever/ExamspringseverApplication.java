package com.exam.examspringsever;

import com.exam.examspringsever.models.Role;
import com.exam.examspringsever.models.User;
import com.exam.examspringsever.models.UserRole;
import com.exam.examspringsever.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class ExamspringseverApplication implements CommandLineRunner {
	@Autowired
	private UserService userService;
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	public static void main(String[] args) {
		SpringApplication.run(ExamspringseverApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.print("Server is running.....");
		
		
//		 User user = new User(); user.setEmail("ravikumarkazi@gmail.com");
//		 user.setFirstname("Ravi"); user.setUsername("ravi");
//		 user.setLastname("Kazi");
//		 user.setPassword(this.bCryptPasswordEncoder.encode("test"));
//		 user.setPhone("8969404344"); user.setProfile("default-profile.png");
//		 
//		 Role role = new Role(); role.setId(1L); role.setName("ADMIN");
//		 
//		 UserRole userRole = new UserRole(); userRole.setRole(role);
//		 userRole.setUser(user);
//		 
//		 Set<UserRole> userRoles = new HashSet<>(); userRoles.add(userRole);
//		 
//		 User user1 = this.userService.addUser(user, userRoles);
//		 System.out.println("Username "+user1.getUsername()+ " has been created.");
		
	}
}
