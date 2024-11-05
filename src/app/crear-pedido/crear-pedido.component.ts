import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpProviderService } from '../Service/http-provider.service';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crear-pedido',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './crear-pedido.component.html',
  styleUrl: './crear-pedido.component.css'
})
export class CrearPedidoComponent {
  myForm2: FormGroup;
  showSuccessMessage: boolean = false;

  constructor(private httpProvider: HttpProviderService, private formBuilder: FormBuilder) {

    this.myForm2 = this.formBuilder.group({
      total: [''],
      fecha: [''],
      cliente: [''],
      comercial: [''],
    });
  }

  async postPedido() {
    try {
      const pedido = this.myForm2.value;
      const res = await this.httpProvider.postPedido(pedido);
      console.log(res);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
    } catch (err) {
      console.log(err);
    }
  }

}
