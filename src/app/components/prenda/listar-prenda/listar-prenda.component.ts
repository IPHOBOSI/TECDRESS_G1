import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

interface Prenda {
  id: number;
  tPrenda: string;
  color: string;
  talla: number;
  material: string;
  precio: number;
  stock: number;
}

@Component({
  selector: 'app-listar-prenda',
  templateUrl: './listar-prenda.component.html',
  styleUrls: ['./listar-prenda.component.css']
})
export class ListarPrendaComponent implements OnInit {
  prendaDataSource: MatTableDataSource<Prenda>;
  displayedColumns: string[] = ['id', 'tPrenda', 'color', 'talla', 'material', 'precio', 'stock'];

  constructor(private router: Router) {
    const prendaData: Prenda[] = [
      { id: 1, tPrenda: 'Camisa', color: 'Rojo', talla: 40, material: 'Algodón', precio: 29.99, stock: 15 },
      { id: 2, tPrenda: 'Pantalón', color: 'Azul', talla: 32, material: 'Denim', precio: 39.99, stock: 25 },
    ];

    this.prendaDataSource = new MatTableDataSource(prendaData);
  }

  ngOnInit(): void { }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.prendaDataSource.filter = filterValue.trim().toLowerCase();
  }

  onLogout(): void {
    // Lógica para cerrar sesión
    console.log('Cerrar sesión');
    this.router.navigate(['/login']); // Redirigir a la página de login después de cerrar sesión
  }
}
