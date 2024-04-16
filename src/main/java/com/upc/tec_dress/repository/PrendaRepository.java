package com.upc.tec_dress.repository;

import com.upc.tec_dress.entities.Prenda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrendaRepository extends JpaRepository<Prenda,Integer> {
}
