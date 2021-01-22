package com.qa.choonz.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.qa.choonz.exception.TrackNotFoundException;
import com.qa.choonz.persistence.domain.User;
import com.qa.choonz.persistence.repository.UserRepository;
import com.qa.choonz.rest.assembler.UserModelAssembler;
import com.qa.choonz.rest.model.UserModel;

@Service
public class UserService implements UserDetailsService {
	
	@Autowired
	private UserRepository repo;
	
	@Autowired
	private UserModelAssembler userModelAssembler;
	
	@Autowired
    private PasswordEncoder encoder;
	
	@Autowired
    private TenantService tenantService;
    
    @Transactional
    public UserModel create(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        tenantService.initDatabase(user.getUsername());
        return this.userModelAssembler.toModel(repo.save(user));
    }
    
    public CollectionModel<UserModel> findAll() {
    	return this.userModelAssembler.toCollectionModel(this.repo.findAll());
    }
    
    public UserModel findById(long id) {
    	return this.userModelAssembler.toModel(this.repo.findById(id).orElseThrow(TrackNotFoundException::new));
    }
    
    public UserModel update(User user, long id) {
        User entity = this.repo.findById(id).orElseThrow(TrackNotFoundException::new);
        entity.setUsername(user.getUsername());
        entity.setPassword(user.getPassword());
        return this.userModelAssembler.toModel(this.repo.save(entity));
    }
    
    public boolean delete(long id) {
        this.repo.deleteById(id);
        return !this.repo.existsById(id);
    }
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    	return repo.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User with the specified username is not found"));
    }

}
