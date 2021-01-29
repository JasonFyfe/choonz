package com.qa.choonz.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.qa.choonz.exception.UserNotFoundException;
import com.qa.choonz.persistence.domain.User;
import com.qa.choonz.persistence.repository.UserRepository;
import com.qa.choonz.rest.assembler.UserModelAssembler;
import com.qa.choonz.rest.model.UserModel;

@Service
public class UserService {
	
	@Autowired
    private UserRepository repo;
	
	@Autowired
	private UserModelAssembler assembler;
	
	@Autowired
    private PasswordEncoder encoder;
	
	@Autowired
    private TenantService tenantService;
    
    @Transactional
    public UserModel create(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        tenantService.initDatabase(user.getUsername());
        return this.assembler.toModel(repo.save(user));
    }
    
    public CollectionModel<UserModel> findAll() {
    	return this.assembler.toCollectionModel(this.repo.findAll());
    }
    
    public UserModel findById(long id) {
    	return this.assembler.toModel(this.repo.findById(id).orElseThrow(UserNotFoundException::new));
    }
    
    public UserModel findByUsername(String username) {
    	return this.assembler.toModel(this.repo.findByUsername(username).orElseThrow(UserNotFoundException::new));
    }
    
    public UserModel update(User user, long id) {
        User entity = this.repo.findById(id).orElseThrow(UserNotFoundException::new);
        entity.setUsername(user.getUsername());
        entity.setPassword(user.getPassword());
        return this.assembler.toModel(this.repo.save(entity));
    }
    
    public boolean delete(long id) {
        this.repo.deleteById(id);
        return !this.repo.existsById(id);
    }
}
