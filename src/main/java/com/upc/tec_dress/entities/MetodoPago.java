package com.upc.tec_dress.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "metodo_pago")
public class MetodoPago {
    @Id
    @Column(name = "id_metodopago", nullable = false)
    private Integer id;

    @Column(name = "tipo_pago", nullable = false, length = 10)
    private String tipoPago;

    @Column(name = "targeta_credito", nullable = false)
    private Integer targetaCredito;

    @Column(name = "f_vencimiento", nullable = false)
    private LocalDate fVencimiento;

    @Column(name = "codigo_seguridad", nullable = false)
    private Integer codigoSeguridad;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_cliente", nullable = false)
    private Cliente idCliente;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_pedido", nullable = false)
    private Pedido idPedido;

}