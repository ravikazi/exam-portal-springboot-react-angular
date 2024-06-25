package com.exam.examspringsever.controllers;

import com.exam.examspringsever.config.JwtUtil;
import com.exam.examspringsever.models.JwtRequest;
import com.exam.examspringsever.models.JwtResponse;
import com.exam.examspringsever.models.User;
import com.exam.examspringsever.services.impl.UserDetailsServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin(origins = "*")
public class JwtController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/generate-token")
    public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception {
        try {
            authenticate(jwtRequest.getUsername(),jwtRequest.getPassword());
        }catch (UsernameNotFoundException e)
        {
            e.printStackTrace();
            throw new Exception("User not Found");
        }
        //Authenticate
        UserDetails userDetails = this.userDetailsService.loadUserByUsername(jwtRequest.getUsername());
        String token = jwtUtil.generateToken(userDetails);
        return ResponseEntity.ok(new JwtResponse(token));
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));
        }catch (DisabledException ds){
            System.out.println("User disabled!");
            throw new Exception("USER DISABLED "+ds.getMessage());
        }catch (BadCredentialsException bd){
            System.out.println("bad credential!");
            throw new Exception("BAD CREDENTIAL "+bd.getMessage());
        }
    }

    //Return details of current logged in user
    @GetMapping("/current-user")
    public User currentUser(Principal principal)
    {
        UserDetails user = this.userDetailsService.loadUserByUsername(principal.getName());
        return (User) user;

    }

}
