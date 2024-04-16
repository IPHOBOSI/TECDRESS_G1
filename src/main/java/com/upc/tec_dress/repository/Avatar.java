package com.upc.tec_dress.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Avatar extends JpaRepository<com.upc.tec_dress.entities.Avatar,Integer> {
}
