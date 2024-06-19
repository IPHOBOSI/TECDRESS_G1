import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { ListarPedidoComponent } from './components/pedido/listar-pedido/listar-pedido.component';
import { InsertarPedidoComponent } from './components/pedido/insertar-pedido/insertar-pedido.component';
import { ListarClienteComponent } from './components/cliente/listar-cliente/listar-cliente.component';
import { InsertarClienteComponent } from './components/cliente/insertar-cliente/insertar-cliente.component';
import { ListarMetodoPagoComponent } from './components/metodoPago/listar-metodo-pago/listar-metodo-pago.component';
import { InsertarMetodoPagoComponent } from './components/metodoPago/insertar-metodo-pago/insertar-metodo-pago.component';
import { ListarPrendaComponent } from './components/prenda/listar-prenda/listar-prenda.component';
import { InsertarPrendaComponent } from './components/prenda/insertar-prenda/insertar-prenda.component';
import { ListarValoracionComponent } from './components/valoracion/listar-valoracion/listar-valoracion.component';
import { InsertarValoracionComponent } from './components/valoracion/insertar-valoracion/insertar-valoracion.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  
  { path: 'pedidos/list', component: ListarPedidoComponent },
  { path: 'pedidos/insertar', component: InsertarPedidoComponent },

  { path: 'clientes/list', component: ListarClienteComponent },
  { path: 'clientes/insertar', component: InsertarClienteComponent },

  { path: 'metodospago/list', component: ListarMetodoPagoComponent },
  { path: 'metodospago/insertar', component: InsertarMetodoPagoComponent },

  { path: 'prendas/list', component: ListarPrendaComponent },
  { path: 'prendas/insertar', component: InsertarPrendaComponent },

  { path: 'valoraciones/list', component: ListarValoracionComponent },
  { path: 'valoraciones/insertar', component: InsertarValoracionComponent },

  { path: 'dashboard', component: NavbarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
