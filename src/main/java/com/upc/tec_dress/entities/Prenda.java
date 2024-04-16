package com.upc.tec_dress.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "prenda")
public class Prenda {
    @Id
    @Column(name = "id_prenda", nullable = false)
    private Integer id;

    @Column(name = "t_prenda", nullable = false, length = 15)
    private String tPrenda;

    @Column(name = "color", nullable = false, length = 15)
    private String color;

    @Column(name = "talla", nullable = false)
    private Integer talla;

    @Column(name = "material", nullable = false, length = 20)
    private String material;

    @Column(name = "precio", nullable = false)
    private Double precio;

    @Column(name = "stock", nullable = false)
    private Integer stock;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_pedido", nullable = false)
    private Pedido idPedido;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "n_vestimenta", nullable = false)
    private Vestidor nVestimenta;

    @OneToMany(mappedBy = "idCliente")
    private Set<Valoracion> valoracions = new LinkedHashSet<>();

}