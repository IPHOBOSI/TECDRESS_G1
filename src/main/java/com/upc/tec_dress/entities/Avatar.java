package com.upc.tec_dress.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "avatar")
public class Avatar {
    @Id
    @Column(name = "id_avatar", nullable = false)
    private Integer id;

    @Column(name = "cod_foto", nullable = false, length = 50)
    private String codFoto;

    @Column(name = "peso", nullable = false)
    private Double peso;

    @Column(name = "altura", nullable = false)
    private Double altura;

    @Column(name = "contextura", nullable = false, length = 50)
    private String contextura;

    @Column(name = "id_cliente", nullable = false)
    private Integer idCliente;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "cliente_id_cliente", nullable = false)
    private Cliente clienteIdCliente;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "n_vestimenta", nullable = false)
    private Vestidor nVestimenta;

}