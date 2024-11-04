import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
Chart.register(...registerables);
@Component({
  selector: 'app-graficos',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.css'
})
export class GraficosComponent {
  public datacount = 7;
  public NUMBER_CFG = {count: this.datacount, min: -100, max: 100};

  public config: any = {
    type: 'line',
    data: {
      labels : ['Enero', 'Febrero'],
      datasets: [
        {
          label: 'Sales',
          data: ['467','432', '234','432'],
          backgroundColor: 'blue',
        },
        {
          label: 'Sales',
          data: ['500','232', '212','152'],
          backgroundColor: 'red',
        },
      ]
    },
    options: {
      aspectRatio: 1,
    },
  };
  chart: any;
  ngOnInit():void{
    this.chart = new Chart('MyChart', this.config);
  }
}
