package com.qa.choonz.rest.controller;

import org.springframework.hateoas.CollectionModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qa.choonz.persistence.domain.User;
import com.qa.choonz.rest.model.UserModel;
import com.qa.choonz.service.UserService;

@RestController
@RequestMapping
@CrossOrigin
public class UserController {

    private UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping("/api/users")
    public ResponseEntity<UserModel> create(@RequestBody User user) {
    	return new ResponseEntity<UserModel>(this.service.create(user), HttpStatus.CREATED);
    }
    
    @GetMapping("/api/users")
    public ResponseEntity<CollectionModel<UserModel>> findAll() {
        return new ResponseEntity<CollectionModel<UserModel>>(this.service.findAll(), HttpStatus.OK);
    }

    @GetMapping("/api/users/{id}")
    public ResponseEntity<UserModel> findById(@PathVariable long id) {
        return new ResponseEntity<UserModel>(this.service.findById(id), HttpStatus.OK);
    }

    @PutMapping("/api/users/{id}")
    public ResponseEntity<UserModel> update(@RequestBody User user, @PathVariable long id) {
        return new ResponseEntity<UserModel>(this.service.update(user, id), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/api/users/{id}")
    public ResponseEntity<UserModel> delete(@PathVariable long id) {
        return this.service.delete(id)
        		? new ResponseEntity<UserModel>(HttpStatus.NO_CONTENT)
                : new ResponseEntity<UserModel>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
