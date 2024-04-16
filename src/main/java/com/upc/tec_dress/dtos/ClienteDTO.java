package com.upc.tec_dress.dtos;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClienteDTO {
    private Integer id;
    private String nombre;
    private String genero;
    private LocalDate fNacimiento;
    private String email;
    private String direccion;
    private Integer talla;
}
