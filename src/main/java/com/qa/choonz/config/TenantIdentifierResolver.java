package com.qa.choonz.config;

import java.security.Principal;
import java.util.Optional;
import java.util.function.Predicate;

import org.hibernate.context.spi.CurrentTenantIdentifierResolver;
import org.springframework.context.annotation.Profile;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Profile({ "devmt", "prod" })
@Component
public class TenantIdentifierResolver implements CurrentTenantIdentifierResolver {

	static final String DEFAULT_TENANT = "default";

	@Override
	public String resolveCurrentTenantIdentifier() {
		return Optional.ofNullable(SecurityContextHolder.getContext().getAuthentication())
				.filter(Predicate.not(authentication -> authentication instanceof AnonymousAuthenticationToken))
				.map(Principal::getName).orElse(DEFAULT_TENANT);
	}

	@Override
	public boolean validateExistingCurrentSessions() {
		return true;
	}
}
