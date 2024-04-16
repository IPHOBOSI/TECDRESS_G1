package com.upc.tec_dress.dtos;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MetodoPagoDTO {
    private Integer id;
    private String tipoPago;
    private Integer targetaCredito;
    private LocalDate fVencimiento;
    private Integer codigoSeguridad;
}
