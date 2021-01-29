package com.qa.choonz.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.ui.DefaultLoginPageGeneratingFilter;
import org.springframework.web.filter.GenericFilterBean;

/* Secures all api enpoints, but opens the /user and h2-console (for dev purposes) */

@Profile({ "devmt", "prod" })
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserDetailsService userDetailsService;
	
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    
    @Bean
    public AuthenticationManager customAuthenticationManager() throws Exception {
        return authenticationManager();
    }
    
    class LoginPageFilter extends GenericFilterBean {
		
		@Override
		public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
			String URI = ((HttpServletRequest)request).getRequestURI();	
			if (SecurityContextHolder.getContext().getAuthentication() != null
					&& SecurityContextHolder.getContext().getAuthentication().isAuthenticated()
					&& (URI.equals("/") || URI.equals("/index.html") || URI.equals("/login") ||  URI.equals("/register.html"))) {
				
				System.out.println("user is authenticated but trying to access login page, redirecting to /");
				((HttpServletResponse)response).sendRedirect("/html/welcome.html");
			}
			chain.doFilter(request, response);
		}
		
	}

	@Autowired
	public void configureGlobal(final AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
	}

	@Override
	public void configure(HttpSecurity http) throws Exception {
		http.addFilterBefore(
				new LoginPageFilter(), DefaultLoginPageGeneratingFilter.class);
		
		http
		.authorizeRequests()
		.antMatchers("/*").permitAll()
        .antMatchers("/api/**").hasRole("USER")
        .antMatchers("/admin/**").hasRole("ADMIN")
        .anyRequest().authenticated()
        	.and()
        .csrf().disable()
        .headers().frameOptions().disable()
        	.and()
        .formLogin().defaultSuccessUrl("/html/welcome.html", true)
        	.and()
        .logout()
        .logoutSuccessUrl("/")
			.permitAll();
		
	}
	
	@Override
	public void configure(WebSecurity web) throws Exception {
	    web
	            .ignoring()
	            .antMatchers("/resources/**", "/static/**", "/css/**", "/js/**", "/img/**");
	}
}