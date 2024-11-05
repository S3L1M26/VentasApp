import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { HttpProviderService } from '../Service/http-provider.service';

Chart.register(...registerables);

@Component({
  selector: 'app-graficos',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent {
  fechas: string[] = [];
  totales: number[] = [];
  clientes: string[] = []; 
  pedidosPorCliente: number[] = []; 
  chartLine: any;
  chartPie: any;

  constructor(private httpProvider: HttpProviderService) {}

  ngOnInit(): void {
    this.getPedidos();
  }

  async getPedidos() {
    try {
      const res = await this.httpProvider.getPedidos();

      const pedidosPorAño: { [year: string]: number } = {};
      const pedidosPorCliente: { [cliente: string]: number } = {};

      res.forEach((pedido: any) => {
        const Año = new Date(pedido.fecha).getFullYear().toString();
        if (pedidosPorAño[Año]) {
          pedidosPorAño[Año] += pedido.total;
        } else {
          pedidosPorAño[Año] = pedido.total;
        }

        const clienteId = pedido.cliente; 
        if (pedidosPorCliente[clienteId]) {
          pedidosPorCliente[clienteId] += 1;
        } else {
          pedidosPorCliente[clienteId] = 1;
        }
      });

      this.fechas = Object.keys(pedidosPorAño);
      this.totales = Object.values(pedidosPorAño);

      this.clientes = Object.keys(pedidosPorCliente); 
      this.pedidosPorCliente = Object.values(pedidosPorCliente);

      this.createCharts();
    } catch (err) {
      console.log(err);
    }
  }

  createCharts() {
    this.configLine.data.labels = this.fechas;
    this.configLine.data.datasets[0].data = this.totales;
    this.chartLine = new Chart('MyChartLine', this.configLine);

    this.configPie.data.labels = this.clientes;
    this.configPie.data.datasets[0].data = this.pedidosPorCliente;
    this.chartPie = new Chart('MyChartPie', this.configPie);
  }

  public configLine: any = {
    type: 'line',
    data: {
      labels: [], 
      datasets: [
        {
          label: 'Cantidad de pedidos',
          data: [], 
          backgroundColor: 'blue',
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        },
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Pedidos por Año'
        }
      }
    },
  };

  public configPie: any = {
    type: 'pie',
    labels: 'Id de Clientes',  
    data: {
      labels: [], 
      datasets: [
        {
          label: 'Cantidad de Pedidos',
          data: [], 
          backgroundColor: ['red', 'blue', 'green', 'yellow', 'orange', 'pink', 'black'],
        },
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Id de Clientes'
        }
      }
    },
  };
}
