import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpProviderService } from './Service/http-provider.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <button (click)="getClientes()">Get Clientes</button>
    <p>{{title}}</p>
  `
})
export class AppComponent {
  title = 'VentasApp';
  clientes: string = '';

  constructor(private httpProvider: HttpProviderService) {}

  getClientes() {
    this.httpProvider.getClientes().then((res) => {
      this.clientes = res;
      console.log(res);
    }).catch((err) => {console.log(err)});
  }
}
