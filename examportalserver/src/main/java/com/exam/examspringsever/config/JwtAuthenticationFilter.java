package com.exam.examspringsever.config;

import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import com.exam.examspringsever.services.impl.UserDetailsServiceImpl;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        final String requestTokenHeader = request.getHeader("Authorization");
        String username=null;
        String jwtToken=null;

        if (requestTokenHeader!=null && requestTokenHeader.startsWith("Bearer "))
        {
            jwtToken = requestTokenHeader.substring(7);
            try {
                username = this.jwtUtil.extractUsername(jwtToken);
            }catch (ExpiredJwtException e)
            {
                e.printStackTrace();
                System.out.println("token has expired");
            }catch (Exception e){
                e.printStackTrace();
                System.out.println("Error");
            }
        }else{
            System.out.println("Invalid token! Not start with Bearer");
            //Use logger; for
        }

        //Validate Token
        if (username!=null && SecurityContextHolder.getContext().getAuthentication()==null)
        {
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
            if (this.jwtUtil.validateToken(jwtToken,userDetails))
            {
                UsernamePasswordAuthenticationToken usernamePasswordAuthentication = new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
                usernamePasswordAuthentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthentication);
            }
        }else{
            System.out.println("Invalid token! Not start with Bearer");
        }
        filterChain.doFilter(request,response);
    }
}
