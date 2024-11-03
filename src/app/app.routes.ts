import { Routes } from '@angular/router';

import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { CrearComercialComponent } from './crear-comercial/crear-comercial.component';
import { CrearPedidoComponent } from './crear-pedido/crear-pedido.component';

export const routes: Routes = [
    { path: '', redirectTo: 'vista-pedidos', pathMatch: 'full' },
    { path: 'crear-cliente', component: CrearClienteComponent },
    { path: 'crear-comercial', component: CrearComercialComponent },
    { path: 'crear-pedido', component: CrearPedidoComponent },
];
