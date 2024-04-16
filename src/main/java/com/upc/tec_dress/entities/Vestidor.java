package com.upc.tec_dress.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "vestidor")
public class Vestidor {
    @Id
    @Column(name = "n_vestimenta", nullable = false)
    private Integer id;

    @Column(name = "n_prenda", nullable = false)
    private Integer nPrenda;

    @Column(name = "id_cliente", nullable = false)
    private Integer idCliente;

    @Column(name = "id_avatar", nullable = false)
    private Integer idAvatar;

    @OneToMany(mappedBy = "nVestimenta")
    private Set<Avatar> avatars = new LinkedHashSet<>();

    @OneToMany(mappedBy = "nVestimenta")
    private Set<Prenda> prendas = new LinkedHashSet<>();

}