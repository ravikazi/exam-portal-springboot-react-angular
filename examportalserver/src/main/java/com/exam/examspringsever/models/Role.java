package com.exam.examspringsever.models;

import javax.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="roles")
public class Role {
    @Id
    private Long id;
    private String name;

    //Many to One
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY,mappedBy = "role")
    private Set<UserRole> userRoles = new HashSet<>();

    public Role() {
    }

    public Set<UserRole> getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(Set<UserRole> userRoles) {
        this.userRoles = userRoles;
    }

    public Role(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

	/*
	 * @Override public String toString() { return "Role{" + "id=" + id + ", name='"
	 * + name + '\'' + ", userRoles=" + userRoles + '}'; }
	 */
}
