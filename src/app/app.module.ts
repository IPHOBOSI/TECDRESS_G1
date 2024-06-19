import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { InsertarPedidoComponent } from './components/pedido/insertar-pedido/insertar-pedido.component';
import { ListarPedidoComponent } from './components/pedido/listar-pedido/listar-pedido.component';
import { MatIconModule } from '@angular/material/icon'; 
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InsertarClienteComponent } from './components/cliente/insertar-cliente/insertar-cliente.component';
import { ListarClienteComponent } from './components/cliente/listar-cliente/listar-cliente.component';
import { InsertarMetodoPagoComponent } from './components/metodoPago/insertar-metodo-pago/insertar-metodo-pago.component';
import { ListarMetodoPagoComponent } from './components/metodoPago/listar-metodo-pago/listar-metodo-pago.component';
import { InsertarPrendaComponent } from './components/prenda/insertar-prenda/insertar-prenda.component';
import { ListarPrendaComponent } from './components/prenda/listar-prenda/listar-prenda.component';
import { InsertarValoracionComponent } from './components/valoracion/insertar-valoracion/insertar-valoracion.component';
import { ListarValoracionComponent } from './components/valoracion/listar-valoracion/listar-valoracion.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    InsertarPedidoComponent,
    ListarPedidoComponent,
    InsertarClienteComponent,
    ListarClienteComponent,
    InsertarMetodoPagoComponent,
    ListarMetodoPagoComponent,
    InsertarPrendaComponent,
    ListarPrendaComponent,
    InsertarValoracionComponent,
    ListarValoracionComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,  // Agregar MatMenuModule
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
