import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

interface Valoracion {
  id: number;
  puntuacionProducto: number;
  comentario: string;
  cliente: { nombre: string };
  pedido: { id: number };
  prenda: { tPrenda: string };
}

@Component({
  selector: 'app-listar-valoracion',
  templateUrl: './listar-valoracion.component.html',
  styleUrls: ['./listar-valoracion.component.css']
})
export class ListarValoracionComponent implements OnInit {
  valoracionDataSource: MatTableDataSource<Valoracion>;
  displayedColumns: string[] = ['id', 'puntuacionProducto', 'comentario', 'cliente', 'pedido', 'prenda'];

  constructor(private router: Router) {
    const valoracionData: Valoracion[] = [
      {
        id: 1, puntuacionProducto: 5, comentario: 'Excelente calidad', cliente: { nombre: 'Cliente 1' },
        pedido: { id: 101 }, prenda: { tPrenda: 'Camisa' }
      },
      {
        id: 2, puntuacionProducto: 4, comentario: 'Muy buen producto', cliente: { nombre: 'Cliente 2' },
        pedido: { id: 102 }, prenda: { tPrenda: 'Pantalón' }
      }
    ];

    this.valoracionDataSource = new MatTableDataSource(valoracionData);
    this.valoracionDataSource.filterPredicate = this.createFilter();
  }

  ngOnInit(): void { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.valoracionDataSource.filter = filterValue.trim().toLowerCase();

    if (this.valoracionDataSource.paginator) {
      this.valoracionDataSource.paginator.firstPage();
    }
  }

  createFilter(): (data: Valoracion, filter: string) => boolean {
    return (data: Valoracion, filter: string): boolean => {
      const searchTerm = filter.toLowerCase();
      return data.id.toString().includes(searchTerm)
        || data.puntuacionProducto.toString().includes(searchTerm)
        || data.comentario.toLowerCase().includes(searchTerm)
        || data.cliente.nombre.toLowerCase().includes(searchTerm)
        || data.pedido.id.toString().includes(searchTerm)
        || data.prenda.tPrenda.toLowerCase().includes(searchTerm);
    };
  }

  logout(): void {
    // Lógica para cerrar sesión
    console.log('Cerrar sesión');
    this.router.navigate(['/login']); // Redirigir a la página de login después de cerrar sesión
  }
}
