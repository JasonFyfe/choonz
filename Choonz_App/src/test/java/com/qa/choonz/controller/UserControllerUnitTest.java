package com.qa.choonz.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.atLeastOnce;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.qa.choonz.config.SingleTenantTest;
import com.qa.choonz.persistence.domain.Role;
import com.qa.choonz.persistence.domain.User;
import com.qa.choonz.rest.assembler.UserModelAssembler;
import com.qa.choonz.rest.controller.UserController;
import com.qa.choonz.rest.model.UserModel;
import com.qa.choonz.service.UserService;

@SingleTenantTest
public class UserControllerUnitTest {

	@Autowired
	private UserController controller;

	@MockBean
	private UserService service;

	@Autowired
	private UserModelAssembler assembler;
	
	Role userRole = new Role(1l, "ROLE_USER", null);
	User TEST_USER_1 = new User(1l, "user1", "password", Arrays.asList(userRole));
	User TEST_USER_2 = new User(2l, "user2", "password", Arrays.asList(userRole));
	
	private final List<User> LISTOFUSER = List.of(TEST_USER_1, TEST_USER_2);

	@Test
	void createTest() throws Exception {
		when(this.service.create(TEST_USER_1)).thenReturn(this.assembler.toModel(TEST_USER_1));
		assertThat(new ResponseEntity<UserModel>(this.assembler.toModel(TEST_USER_1), HttpStatus.CREATED))
				.isEqualTo(this.controller.create(TEST_USER_1));
		verify(this.service, atLeastOnce()).create(TEST_USER_1);
	}

	@Test
	void readOneTest() throws Exception {
		when(this.service.findById(TEST_USER_1.getId())).thenReturn(this.assembler.toModel(TEST_USER_1));
		assertThat(new ResponseEntity<UserModel>(this.assembler.toModel(TEST_USER_1), HttpStatus.OK))
				.isEqualTo(this.controller.findById(TEST_USER_1.getId()));
		verify(this.service, atLeastOnce()).findById(TEST_USER_1.getId());
	}

	@Test
	void readAllTest() throws Exception {
		when(this.service.findAll()).thenReturn(this.assembler.toCollectionModel(LISTOFUSER));
		assertThat(this.controller.findAll())
				.isEqualTo(new ResponseEntity<>(this.assembler.toCollectionModel(LISTOFUSER), HttpStatus.OK));
		verify(this.service, atLeastOnce()).findAll();
	}

	@Test
	void updateTest() throws Exception {
		when(this.service.update(TEST_USER_1, TEST_USER_1.getId())).thenReturn(this.assembler.toModel(TEST_USER_1));
		assertThat(new ResponseEntity<UserModel>(this.assembler.toModel(TEST_USER_1), HttpStatus.ACCEPTED))
				.isEqualTo(this.controller.update(TEST_USER_1, (TEST_USER_1.getId())));
		verify(this.service, atLeastOnce()).update((TEST_USER_1), TEST_USER_1.getId());
	}

	@Test
	void deleteTest() throws Exception {
		when(this.service.delete(TEST_USER_1.getId())).thenReturn(false);
		assertThat(this.controller.delete(TEST_USER_1.getId()))
				.isEqualTo(new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR));
		verify(this.service, atLeastOnce()).delete(TEST_USER_1.getId());
	}

	@Test
	void deleteTestTwo() throws Exception {
		when(this.service.delete(TEST_USER_1.getId())).thenReturn(true);
		assertThat(this.controller.delete(TEST_USER_1.getId())).isEqualTo(new ResponseEntity<>(HttpStatus.NO_CONTENT));
		verify(this.service, atLeastOnce()).delete(TEST_USER_1.getId());
	}

}
