import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insertar-pedido',
  templateUrl: './insertar-pedido.component.html',
  styleUrls: ['./insertar-pedido.component.css']
})
export class InsertarPedidoComponent implements OnInit {
  pedidoForm: FormGroup;
  clientes: any[] = []; // Reemplazar con el tipo correcto
  companiasEntrega: any[] = []; // Reemplazar con el tipo correcto
  metodosPago: any[] = []; // Reemplazar con el tipo correcto

  constructor(private fb: FormBuilder) {
    this.pedidoForm = this.fb.group({
      cantidadPedido: ['', Validators.required],
      fPedido: ['', Validators.required],
      fEntrega: ['', Validators.required],
      status: ['', Validators.required],
      precioTotal: ['', Validators.required],
      clienteId: ['', Validators.required],
      companiaEntregaId: ['', Validators.required],
      metodoPagoId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Cargar los datos iniciales para clientes, companiasEntrega y metodosPago
    this.clientes = [
      // Datos de ejemplo
      { id: 1, nombre: 'Cliente 1' },
      { id: 2, nombre: 'Cliente 2' }
    ];

    this.companiasEntrega = [
      // Datos de ejemplo
      { id: 1, nombre: 'Compañía 1' },
      { id: 2, nombre: 'Compañía 2' }
    ];

    this.metodosPago = [
      // Datos de ejemplo
      { id: 1, nombre: 'Método Pago 1' },
      { id: 2, nombre: 'Método Pago 2' }
    ];
  }

  onSubmit(): void {
    if (this.pedidoForm.valid) {
      const pedido = this.pedidoForm.value;
      console.log('Pedido guardado:', pedido);
      // Lógica para guardar el pedido
    }
  }

  logout(): void {
    // Lógica para cerrar sesión
    console.log('Cerrar sesión');
    // Redirigir a la página de login después de cerrar sesión
  }
}
