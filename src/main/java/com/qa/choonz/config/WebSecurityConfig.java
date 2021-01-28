package com.qa.choonz.config;

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
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

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

	@Autowired
	public void configureGlobal(final AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
	}

	@Override
	public void configure(HttpSecurity http) throws Exception {
		http
		.authorizeRequests()
        .antMatchers("/*").permitAll()
        .antMatchers("/api/**").hasRole("USER")
        .antMatchers("/static/**").authenticated()
        .antMatchers("/admin/**").hasRole("ADMIN")
        .anyRequest().authenticated()
        	.and()
        .csrf().disable()
        .headers().frameOptions().disable()
        	.and()
        .formLogin()
        	.and()
        .logout()
			.permitAll();
		
	}
	
	@Override
	public void configure(WebSecurity web) throws Exception {
	    web
	            .ignoring()
	            .antMatchers("/resources/**", "/static/**", "/css/**", "/js/**");
	}
}