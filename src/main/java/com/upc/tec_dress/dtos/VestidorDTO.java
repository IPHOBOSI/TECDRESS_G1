package com.upc.tec_dress.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VestidorDTO {
    private Integer id;
    private Integer nPrenda;
    private Integer idCliente;
    private Integer idAvatar;
}
