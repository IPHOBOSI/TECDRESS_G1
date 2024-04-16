package com.upc.tec_dress.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "valoracion")
public class Valoracion {
    @Id
    @Column(name = "id_valoracion", nullable = false)
    private Integer id;

    @Column(name = "puntuacion_producto", nullable = false)
    private Integer puntuacionProducto;

    @Column(name = "comentario", nullable = false, length = Integer.MAX_VALUE)
    private String comentario;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_cliente", nullable = false)
    private Prenda idCliente;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_pedido", nullable = false)
    private Cliente idPedido;

}