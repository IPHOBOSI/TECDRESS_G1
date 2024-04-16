package com.upc.tec_dress.dtos;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AvatarDTO {
    private Integer id;
    private String codFoto;
    private Double peso;
    private Double altura;
    private String contextura;
    private Integer idCliente;
}
