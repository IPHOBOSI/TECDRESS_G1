import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

interface Cliente {
  id: number;
  nombre: string;
  genero: string;
  fNacimiento: Date;
  email: string;
  direccion: string;
  talla: number;
}

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'genero', 'fNacimiento', 'email', 'direccion', 'talla'];
  clienteDataSource: MatTableDataSource<Cliente>;

  constructor(private router: Router) {
    const clienteData: Cliente[] = [
      { id: 1, nombre: 'Juan Pérez', genero: 'M', fNacimiento: new Date('1990-01-01'), email: 'juan.perez@example.com', direccion: 'Av. Siempre Viva 123', talla: 42 },
      { id: 2, nombre: 'Ana Gómez', genero: 'F', fNacimiento: new Date('1985-05-15'), email: 'ana.gomez@example.com', direccion: 'Calle Falsa 456', talla: 38 },
    ];

    this.clienteDataSource = new MatTableDataSource(clienteData);
  }

  ngOnInit(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.clienteDataSource.filter = filterValue.trim().toLowerCase();

    if (this.clienteDataSource.paginator) {
      this.clienteDataSource.paginator.firstPage();
    }
  }

  logout(): void {
    console.log('Cerrar sesión');
    this.router.navigate(['/login']);
  }
}
