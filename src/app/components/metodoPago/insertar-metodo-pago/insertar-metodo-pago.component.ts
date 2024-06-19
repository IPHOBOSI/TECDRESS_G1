import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertar-metodo-pago',
  templateUrl: './insertar-metodo-pago.component.html',
  styleUrls: ['./insertar-metodo-pago.component.css']
})
export class InsertarMetodoPagoComponent implements OnInit {
  metodoPagoForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.metodoPagoForm = this.fb.group({
      tipoPago: ['', Validators.required],
      targetaCredito: ['', Validators.required],
      fVencimiento: ['', Validators.required],
      codigoSeguridad: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.metodoPagoForm.valid) {
      // Lógica para manejar el envío del formulario
      console.log(this.metodoPagoForm.value);
      // Redirigir al usuario al listado de métodos de pago después de guardar
      this.router.navigate(['/metodospago/list']);
    }
  }

  logout(): void {
    // Lógica para cerrar sesión
    console.log('Cerrar sesión');
    this.router.navigate(['/login']); // Redirigir a la página de login después de cerrar sesión
  }
}
