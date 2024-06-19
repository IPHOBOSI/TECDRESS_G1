import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Cliente {
  id: number;
  nombre: string;
}

interface Pedido {
  id: number;
}

interface Prenda {
  id: number;
  tPrenda: string;
}

@Component({
  selector: 'app-insertar-valoracion',
  templateUrl: './insertar-valoracion.component.html',
  styleUrls: ['./insertar-valoracion.component.css']
})
export class InsertarValoracionComponent implements OnInit {
  valoracionForm: FormGroup;
  clientes: Cliente[] = [
    { id: 1, nombre: 'Juan Pérez' },
    { id: 2, nombre: 'Ana Gómez' }
  ];
  pedidos: Pedido[] = [
    { id: 1 },
    { id: 2 }
  ];
  prendas: Prenda[] = [
    { id: 1, tPrenda: 'Camisa' },
    { id: 2, tPrenda: 'Pantalón' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.valoracionForm = this.fb.group({
      puntuacionProducto: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      comentario: ['', Validators.required],
      cliente: ['', Validators.required],
      pedido: ['', Validators.required],
      prenda: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.valoracionForm.valid) {
      console.log('Valoración guardada', this.valoracionForm.value);
      this.router.navigate(['/valoraciones/list']);
    }
  }

  logout(): void {
    console.log('Cerrar sesión');
    this.router.navigate(['/login']);
  }
}
