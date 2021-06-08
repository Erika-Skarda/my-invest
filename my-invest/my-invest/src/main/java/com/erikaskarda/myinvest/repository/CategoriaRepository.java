package com.erikaskarda.myinvest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.erikaskarda.myinvest.domain.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long>{

}
