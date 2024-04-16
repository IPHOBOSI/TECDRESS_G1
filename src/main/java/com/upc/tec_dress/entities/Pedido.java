package com.upc.tec_dress.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "pedido")
public class Pedido {
    @Id
    @Column(name = "id_pedido", nullable = false)
    private Integer id;

    @Column(name = "cantidad_pedido", nullable = false)
    private Integer cantidadPedido;

    @Column(name = "f_pedido", nullable = false)
    private LocalDate fPedido;

    @Column(name = "f_entrega", nullable = false)
    private LocalDate fEntrega;

    @Column(name = "status", nullable = false, length = 50)
    private String status;

    @Column(name = "precio_total", nullable = false)
    private Double precioTotal;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_cliente", nullable = false)
    private Cliente idCliente;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "n_proveedor", nullable = false)
    private CompaniaEntrega nProveedor;

    @OneToMany(mappedBy = "idPedido")
    private Set<MetodoPago> metodoPagos = new LinkedHashSet<>();

    @OneToMany(mappedBy = "idPedido")
    private Set<Prenda> prendas = new LinkedHashSet<>();

}