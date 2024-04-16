package com.upc.tec_dress.dtos;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Vestidor {
    private Integer id;
    private Integer nPrenda;
    private Integer idCliente;
    private Integer idAvatar;
}
