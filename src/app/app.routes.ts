import { Routes } from '@angular/router';

import { VistaPedidosComponent } from './vista-pedidos/vista-pedidos.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { CrearComercialComponent } from './crear-comercial/crear-comercial.component';
import { CrearPedidoComponent } from './crear-pedido/crear-pedido.component';
import { GraficosComponent } from './graficos/graficos.component';


export const routes: Routes = [
    { path: '', component: VistaPedidosComponent },
    { path: 'graficos', component: GraficosComponent},
    { path: 'crear-cliente', component: CrearClienteComponent },
    { path: 'crear-comercial', component: CrearComercialComponent },
    { path: 'crear-pedido', component: CrearPedidoComponent },
];
