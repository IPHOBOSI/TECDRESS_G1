package com.upc.tec_dress.dtos;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompaniaDTO {
    private String nProveedor;
    private Integer idPedido;
    private String mmetodoEnvio;
    private String costoEnvio;
    private String direccionCliente;
}
