package com.upc.tec_dress.repository;

import com.upc.tec_dress.entities.Vestidor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VestidorRepository extends JpaRepository<Vestidor,Integer> {
}
