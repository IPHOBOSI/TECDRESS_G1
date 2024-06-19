import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css']
})
export class ListarPedidoComponent implements OnInit {
  pedidos: any[] = []; // Reemplazar con el tipo correcto
  pedidoDataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'id', 'cantidadPedido', 'fPedido', 'fEntrega', 'status', 'precioTotal', 'cliente', 'companiaEntrega', 'metodoPago'
  ];

  constructor(private router: Router) {
    this.pedidos = [
      // Datos de ejemplo
      {
        id: 1, cantidadPedido: 10, fPedido: new Date(), fEntrega: new Date(), status: 'Entregado',
        precioTotal: 100, cliente: { nombre: 'Cliente 1' }, companiaEntrega: { nombre: 'Compañía 1' },
        metodoPago: { nombre: 'PayPal' }
      },
      {
        id: 2, cantidadPedido: 5, fPedido: new Date(), fEntrega: new Date(), status: 'Pendiente',
        precioTotal: 50, cliente: { nombre: 'Cliente 2' }, companiaEntrega: { nombre: 'Compañía 2' },
        metodoPago: { nombre: 'Tarjeta de Crédito' }
      }
    ];

    this.pedidoDataSource = new MatTableDataSource(this.pedidos);
    this.pedidoDataSource.filterPredicate = this.createFilter();
  }

  ngOnInit(): void { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.pedidoDataSource.filter = filterValue.trim().toLowerCase();

    if (this.pedidoDataSource.paginator) {
      this.pedidoDataSource.paginator.firstPage();
    }
  }

  createFilter(): (data: any, filter: string) => boolean {
    return (data: any, filter: string): boolean => {
      const searchTerm = filter.toLowerCase();
      return data.id.toString().includes(searchTerm)
        || data.cantidadPedido.toString().includes(searchTerm)
        || data.fPedido.toDateString().toLowerCase().includes(searchTerm)
        || data.fEntrega.toDateString().toLowerCase().includes(searchTerm)
        || data.status.toLowerCase().includes(searchTerm)
        || data.precioTotal.toString().includes(searchTerm)
        || data.cliente.nombre.toLowerCase().includes(searchTerm)
        || data.companiaEntrega.nombre.toLowerCase().includes(searchTerm)
        || data.metodoPago.nombre.toLowerCase().includes(searchTerm);
    };
  }

  onInsertarPedido(): void {
    this.router.navigate(['/pedidos/insertar']);
  }

  logout(): void {
    // Lógica para cerrar sesión
    console.log('Cerrar sesión');
    this.router.navigate(['/login']); // Redirigir a la página de login después de cerrar sesión
  }
}
