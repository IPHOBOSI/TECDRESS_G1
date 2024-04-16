package com.upc.tec_dress.dtos;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PrendaDTO {
    private Integer id;
    private String tPrenda;
    private String color;
    private Integer talla;
    private String material;
    private Double precio;
    private Integer stock;
}

