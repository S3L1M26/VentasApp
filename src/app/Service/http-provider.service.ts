import { Injectable } from '@angular/core';
import Axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  private baseUrl: string = 'http://127.0.0.1:8000/api';

  constructor() { }

  async getClientes() {
    try {
      const response = await Axios.get(`${this.baseUrl}/clientes`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getPedidos() {
    try {
      const response = await Axios.get(`${this.baseUrl}/pedidos`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getComerciales() {
    try {
      const response = await Axios.get(`${this.baseUrl}/comerciales`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async postCliente(cliente: any){
    try {
      const response = await Axios.post(`${this.baseUrl}/clientes/`, cliente);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  
  async postPedido(pedido: any) {
    try {
      const response = await Axios.post(`${this.baseUrl}/pedidos/`, pedido);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async postComercial(comercial: any) {
    try {
      const response = await Axios.post(`${this.baseUrl}/comerciales/`, comercial);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
