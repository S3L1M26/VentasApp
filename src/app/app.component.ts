import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpProviderService } from './Service/http-provider.service';
import { Cliente } from './Interfaces/Interfaces';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'VentasApp';
  clientes: string = '';
  myForm: FormGroup;
  myForm2: FormGroup;
  myForm3: FormGroup;

  constructor(private httpProvider: HttpProviderService, private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      nombre: [''],
      apellido1: [''],
      apellido2: [''],
      ciudad: [''],
      categoria: [''],
    });

    this.myForm2 = this.formBuilder.group({
      total: [''],
      fecha: [''],
      cliente: [''],
      comercial: [''],
    });

    this.myForm3 = this.formBuilder.group({
      nombre: [''],
      apellido1: [''],
      comision: ['']
    });
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

  async postCliente() {
    try {
      const cliente = this.myForm.value;
      const res = await this.httpProvider.postCliente(cliente);
      this.clientes = res;
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  async postPedido() {
    try {
      const pedido = this.myForm2.value;
      const res = await this.httpProvider.postPedido(pedido);
      this.clientes = res;
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  async postComercial() {
    try {
      const comercial = this.myForm3.value;
      const res = await this.httpProvider.postComercial(comercial);
      this.clientes = res;
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
}
