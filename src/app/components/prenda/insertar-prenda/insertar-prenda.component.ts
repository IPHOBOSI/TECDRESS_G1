import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertar-prenda',
  templateUrl: './insertar-prenda.component.html',
  styleUrls: ['./insertar-prenda.component.css']
})
export class InsertarPrendaComponent implements OnInit {
  prendaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.prendaForm = this.fb.group({
      tPrenda: ['', Validators.required],
      color: ['', Validators.required],
      talla: ['', Validators.required],
      material: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.prendaForm.valid) {
      // Aquí iría la lógica para guardar la prenda
      console.log('Formulario enviado', this.prendaForm.value);
      this.router.navigate(['/prendas/list']);
    }
  }

  logout(): void {
    // Lógica para cerrar sesión
    console.log('Cerrar sesión');
    // Redirigir a la página de login después de cerrar sesión
  }
}
