import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertar-cliente',
  templateUrl: './insertar-cliente.component.html',
  styleUrls: ['./insertar-cliente.component.css']
})
export class InsertarClienteComponent implements OnInit {
  clienteForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      genero: ['', Validators.required],
      fNacimiento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required],
      talla: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.clienteForm.valid) {
      // Lógica para enviar los datos del formulario
      console.log(this.clienteForm.value);
    }
  }

  logout(): void {
    // Lógica para cerrar sesión
    console.log('Cerrando sesión...');
    this.router.navigate(['/login']); // Redirigir al usuario a la página de login
  }
}
