package com.qa.choonz.config;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Profile;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.qa.choonz.persistence.domain.Role;
import com.qa.choonz.persistence.domain.User;
import com.qa.choonz.persistence.repository.RoleRepository;
import com.qa.choonz.persistence.repository.UserRepository;

//@Profile({"devmt", "prod"})
@Component
public class SetupDataLoader implements ApplicationListener<ContextRefreshedEvent> {

    boolean alreadySetup = false;

    @Autowired
    private UserRepository userRepo;
 
    @Autowired
    private RoleRepository roleRepo;
 
    @Autowired
    private PasswordEncoder passwordEncoder;
 
    @Override
    @Transactional
    public void onApplicationEvent(ContextRefreshedEvent event) {
 
        if (alreadySetup)
            return;
        
        Role adminRole = new Role(); Role userRole = new Role();
        adminRole.setName("ROLE_ADMIN"); userRole.setName("ROLE_USER");
        
        adminRole = roleRepo.save(adminRole); userRole = roleRepo.save(userRole);

        User admin = new User();
        admin.setUsername("admin");
        admin.setPassword(passwordEncoder.encode("password"));
        admin.setRoles(Arrays.asList(adminRole));
        userRepo.save(admin);
        
        User user = new User();
        user.setUsername("user");
        user.setPassword(passwordEncoder.encode("password"));
        user.setRoles(Arrays.asList(userRole));
        userRepo.save(user);

        alreadySetup = true;
    }
}
