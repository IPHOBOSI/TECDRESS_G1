package com.upc.tec_dress.dtos;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PedidoDTO {
    private Integer id;
    private Integer cantidadPedido;
    private LocalDate fPedido;
    private LocalDate fEntrega;
    private String status;
    private Double precioTotal;
}
