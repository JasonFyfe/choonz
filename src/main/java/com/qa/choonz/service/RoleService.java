//package com.qa.choonz.service;
//
//import javax.management.relation.RoleNotFoundException;
//import javax.transaction.Transactional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.hateoas.CollectionModel;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//import com.qa.choonz.persistence.domain.Role;
//import com.qa.choonz.persistence.repository.RoleRepository;
//import com.qa.choonz.rest.assembler.RoleModelAssembler;
//import com.qa.choonz.rest.model.RoleModel;
//
//public class RoleService {
//	
//	@Autowired
//    private RoleRepository repo;
//	
//	@Autowired
//	private RoleModelAssembler assembler;
//	
//	@Autowired
//    private PasswordEncoder encoder;
//	
//	@Autowired
//    private TenantService tenantService;
//    
//    @Transactional
//    public RoleModel create(Role Role) {
//        Role.setPassword(encoder.encode(Role.getPassword()));
//        tenantService.initDatabase(Role.getRolename());
//        return this.assembler.toModel(repo.save(Role));
//    }
//    
//    public CollectionModel<RoleModel> findAll() {
//    	return this.assembler.toCollectionModel(this.repo.findAll());
//    }
//    
//    public RoleModel findById(long id) {
//    	return this.assembler.toModel(this.repo.findById(id).orElseThrow(RoleNotFoundException::new));
//    }
//    
//    public RoleModel findByRolename(String Rolename) {
//    	return this.assembler.toModel(this.repo.findByRolename(Rolename).orElseThrow(RoleNotFoundException::new));
//    }
//    
//    public RoleModel update(Role Role, long id) {
//        Role entity = this.repo.findById(id).orElseThrow(RoleNotFoundException::new);
//        entity.setRolename(Role.getRolename());
//        entity.setPassword(Role.getPassword());
//        return this.assembler.toModel(this.repo.save(entity));
//    }
//    
//    public boolean delete(long id) {
//        this.repo.deleteById(id);
//        return !this.repo.existsById(id);
//    }
//
//}
