import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpProviderService } from './Service/http-provider.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'VentasApp';
  clientes: string = '';
  

  constructor(private httpProvider: HttpProviderService) {

  }

  async getClientes() {
    try {
      const res = await this.httpProvider.getClientes();
      this.clientes = res;
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  async getPedidos() {
    try {
      const res = await this.httpProvider.getPedidos();
      this.clientes = res;
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  async getComerciales() {
    try {
      const res = await this.httpProvider.getComerciales();
      this.clientes = res;
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

}
