package com.qa.choonz.rest.assembler;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Component;

import com.qa.choonz.persistence.domain.Role;
import com.qa.choonz.persistence.domain.User;
import com.qa.choonz.rest.controller.UserController;
import com.qa.choonz.rest.model.UserModel;

@Component
public class UserModelAssembler extends RepresentationModelAssemblerSupport<User, UserModel> {
	
	public UserModelAssembler() {
		super(UserController.class, UserModel.class);
	}

	@Override
	public UserModel toModel(User entity) {
		UserModel userModel = instantiateModel(entity);
		
		userModel.add(linkTo(
				methodOn(UserController.class)
				.findById(entity.getId()))
				.withSelfRel());
		userModel.add(linkTo(
				methodOn(UserController.class)
				.findAll())
				.withRel("users"));
		userModel.setId(entity.getId());
		userModel.setUsername(entity.getUsername());
		userModel.setPassword(entity.getPassword());
		userModel.setRoles(toRoleStrings(entity.getRoles()));
		return userModel;
	}
	
	private List<String> toRoleStrings(List<Role> roles) {
		
		if (roles == null || roles.isEmpty()) {
			return Collections.emptyList();
		}
		
		return roles.stream().map(Role::getName).collect(Collectors.toList());
	}
		
	

}
