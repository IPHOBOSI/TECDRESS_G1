package com.upc.tec_dress.repository;

import com.upc.tec_dress.entities.CompaniaEntrega;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompañiaEntregaRepository extends JpaRepository<CompaniaEntrega,String> {
}
