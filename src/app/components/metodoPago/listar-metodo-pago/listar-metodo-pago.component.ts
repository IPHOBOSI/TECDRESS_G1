import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

interface MetodoPago {
  id: number;
  tipoPago: string;
  targetaCredito: string;
  fVencimiento: Date;
  codigoSeguridad: number;
}

@Component({
  selector: 'app-listar-metodo-pago',
  templateUrl: './listar-metodo-pago.component.html',
  styleUrls: ['./listar-metodo-pago.component.css']
})
export class ListarMetodoPagoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'tipoPago', 'targetaCredito', 'fVencimiento', 'codigoSeguridad'];
  metodoPagoDataSource: MatTableDataSource<MetodoPago>;

  constructor(private router: Router) {
    const metodoPagoData: MetodoPago[] = [
      { id: 1, tipoPago: 'PayPal', targetaCredito: '1234567890123456', fVencimiento: new Date('2025-01-01'), codigoSeguridad: 123 },
      { id: 2, tipoPago: 'Tarjeta de Crédito', targetaCredito: '9876543210987654', fVencimiento: new Date('2024-05-15'), codigoSeguridad: 456 },
    ];

    this.metodoPagoDataSource = new MatTableDataSource(metodoPagoData);
  }

  ngOnInit(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.metodoPagoDataSource.filter = filterValue.trim().toLowerCase();

    if (this.metodoPagoDataSource.paginator) {
      this.metodoPagoDataSource.paginator.firstPage();
    }
  }

  logout(): void {
    console.log('Cerrar sesión');
    this.router.navigate(['/login']);
  }
}