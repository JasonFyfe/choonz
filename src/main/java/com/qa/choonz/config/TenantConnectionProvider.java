package com.qa.choonz.config;

import java.sql.Connection;

import java.sql.SQLException;

import javax.sql.DataSource;

import org.hibernate.engine.jdbc.connections.spi.MultiTenantConnectionProvider;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

/* Provides connections based on tenant identifier. 
   Reuses the JDBC connection pool to serve all tenants, but before using the Connection,
   it alters it with the SET SCHEMA command to reference the schema named by the tenant identifier.*/

@SuppressWarnings("serial")
@Profile({"devmt", "prod"})
@Component
public class TenantConnectionProvider implements MultiTenantConnectionProvider {

    private DataSource datasource;

    public TenantConnectionProvider(DataSource dataSource) {
        this.datasource = dataSource;
    }

    @Override
    public Connection getAnyConnection() throws SQLException {
        return datasource.getConnection();
    }

    @Override
    public void releaseAnyConnection(Connection connection) throws SQLException {
        connection.close();
    }

    @Override
    public Connection getConnection(String tenantIdentifier) throws SQLException {
        final Connection connection = getAnyConnection();
        connection.createStatement()
                .execute(String.format("SET SCHEMA \"%s\";", tenantIdentifier));
        return connection;
    }

    @Override
    public void releaseConnection(String tenantIdentifier, Connection connection) throws SQLException {
        connection.createStatement()
                .execute(String.format("SET SCHEMA \"%s\";", TenantIdentifierResolver.DEFAULT_TENANT));
        releaseAnyConnection(connection);
    }

    @Override
    public boolean supportsAggressiveRelease() {
        return false;
    }

    @Override
    public boolean isUnwrappableAs(@SuppressWarnings("rawtypes") Class unwrapType) {
        return false;
    }

    @Override
    public <T> T unwrap(Class<T> unwrapType) {
        return null;
    }
}
