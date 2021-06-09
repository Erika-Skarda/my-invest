package com.erikaskarda.myinvest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.erikaskarda.myinvest.domain.Investimento;

public interface InvestimentoRepository extends JpaRepository<Investimento, Long>{

}
