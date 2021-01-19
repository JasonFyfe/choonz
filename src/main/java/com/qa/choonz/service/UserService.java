package com.qa.choonz.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.qa.choonz.persistence.domain.User;
import com.qa.choonz.persistence.repository.UserRepository;
import com.qa.choonz.rest.dto.UserDTO;

@Service
public class UserService implements UserDetailsService {

    private UserRepository repo;
    private PasswordEncoder encoder;
    private TenantService tenantService;
    private ModelMapper mapper;

    public UserService(UserRepository repo, ModelMapper mapper, TenantService tenantService) {
    	super();
        this.repo = repo;
        this.mapper = mapper;
        this.tenantService = tenantService;
        this.encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
    
    private UserDTO mapToDTO(User user) {
        return this.mapper.map(user, UserDTO.class);
    }
    
    @Transactional
    public UserDTO createUser(User user) {
        String encodedPassword = encoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        User saved = repo.save(user);
        tenantService.initDatabase(user.getUsername());
        return mapToDTO(saved);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repo.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User with the specified username is not found"));
    }
  
}
