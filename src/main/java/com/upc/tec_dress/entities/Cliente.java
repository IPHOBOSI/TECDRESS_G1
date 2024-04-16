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
@Table(name = "cliente")
public class Cliente {
    @Id
    @Column(name = "id_cliente", nullable = false)
    private Integer id;

    @Column(name = "nombre", nullable = false, length = 50)
    private String nombre;

    @Column(name = "genero", nullable = false, length = 5)
    private String genero;

    @Column(name = "f_nacimiento", nullable = false)
    private LocalDate fNacimiento;

    @Column(name = "email", nullable = false, length = 100)
    private String email;

    @Column(name = "direccion", nullable = false, length = 100)
    private String direccion;

    @Column(name = "talla", nullable = false)
    private Integer talla;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "n_proveedor", nullable = false)
    private CompaniaEntrega nProveedor;

    @OneToMany(mappedBy = "clienteIdCliente")
    private Set<Avatar> avatars = new LinkedHashSet<>();

    @OneToMany(mappedBy = "idCliente")
    private Set<MetodoPago> metodoPagos = new LinkedHashSet<>();

    @OneToMany(mappedBy = "idCliente")
    private Set<Pedido> pedidos = new LinkedHashSet<>();

    @OneToMany(mappedBy = "idPedido")
    private Set<Valoracion> valoracions = new LinkedHashSet<>();

}