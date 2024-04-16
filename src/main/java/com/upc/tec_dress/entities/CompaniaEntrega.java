package com.upc.tec_dress.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "compania_entrega")
public class CompaniaEntrega {
    @Id
    @Column(name = "n_proveedor", nullable = false, length = 10)
    private String nProveedor;

    @Column(name = "id_pedido", nullable = false)
    private Integer idPedido;

    @Column(name = "mmetodo_envio", nullable = false, length = 10)
    private String mmetodoEnvio;

    @Column(name = "costo_envio", nullable = false, length = 15)
    private String costoEnvio;

    @Column(name = "direccion_cliente", nullable = false, length = 100)
    private String direccionCliente;

    @OneToMany(mappedBy = "nProveedor")
    private Set<Cliente> clientes = new LinkedHashSet<>();

    @OneToMany(mappedBy = "nProveedor")
    private Set<Pedido> pedidos = new LinkedHashSet<>();

}