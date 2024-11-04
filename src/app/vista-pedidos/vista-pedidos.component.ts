import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpProviderService } from '../Service/http-provider.service';

interface Pedido {
  id: number;
  cliente: string;
  fecha: string;
  total: number;
}

@Component({
  selector: 'app-vista-pedidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vista-pedidos.component.html',
  styleUrl: './vista-pedidos.component.css'
})
export class VistaPedidosComponent {
  pedidos: Pedido[] = [];

  constructor(private httpProvider: HttpProviderService) {}

  ngOnInit() {
    this.getPedidos();
  }

  async getPedidos() {
    try {
      const res = await this.httpProvider.getPedidos();
      this.pedidos = res;

    } catch (err) {
      console.log(err);
    }
  }
}
