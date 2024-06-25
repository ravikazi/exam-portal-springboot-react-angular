package com.exam.examspringsever.repositories;

import com.exam.examspringsever.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
