//package com.qa.choonz.controller;
//
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.http.MediaType;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.RequestBuilder;
//import org.springframework.test.web.servlet.ResultMatcher;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.qa.choonz.config.SingleTenantTest;
//import com.qa.choonz.persistence.domain.User;
//import com.qa.choonz.rest.assembler.UserModelAssembler;
//import com.qa.choonz.rest.model.UserModel;
//
//@SingleTenantTest
//@AutoConfigureMockMvc
//public class UserControllerIntegrationTest {
//
//	@Autowired
//	private MockMvc mvc;
//
//	@Autowired
//	private ObjectMapper jsonifier;
//
//	@Autowired
//	private UserModelAssembler assembler;
//
//	private final String URI = "/api/users";
//
//	private final User TEST_USER_1 = new User(1L, "admin", "password");
//
//	@Test
//	void createTest() throws Exception {
//		UserModel testModel = this.assembler.toModel(TEST_USER_1);
//		String testModelJson = this.jsonifier.writeValueAsString(testModel);
//
//		RequestBuilder request = post(URI + "/").contentType(MediaType.APPLICATION_JSON).content(testModelJson);
//
//		this.mvc.perform(request).andExpect(status().isCreated());
//	}
//
//	@Test
//	void readAllTest() throws Exception {
//		RequestBuilder request = get(URI + "/").contentType(MediaType.APPLICATION_JSON);
//		this.mvc.perform(request).andExpect(status().isOk());
//	}
//
//	@Test
//	void readOneTest() throws Exception {
//		RequestBuilder request = get(URI + "/1").contentType(MediaType.APPLICATION_JSON);
//		this.mvc.perform(request).andExpect(status().isOk()).andReturn();
//	}
//
//	@Test
//	void updateTest() throws Exception {
//		String toUpdate = "{\"username\":\"admintoo\",\"password\":\"passwordtoo\"}";
//		RequestBuilder request = put(URI + "/1").contentType(MediaType.APPLICATION_JSON).content(toUpdate);
//		this.mvc.perform(request).andExpect(status().isAccepted());
//	}
//
//	@Test
//	void deleteTest() throws Exception {
//		RequestBuilder request = delete(URI + "/1");
//		ResultMatcher checkStatus = status().isNoContent();
//
//		this.mvc.perform(request).andExpect(checkStatus);
//	}
//}
