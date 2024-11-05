import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpProviderService } from './Service/http-provider.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'VentasApp';

  constructor(private httpProvider: HttpProviderService) {}

  async getClientes() {
    try {
      const res = await this.httpProvider.getClientes();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  async getComerciales() {
    try {
      const res = await this.httpProvider.getComerciales();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

}
