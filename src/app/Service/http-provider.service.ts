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
      const response = await Axios.get('http://127.0.0.1:8000/api/clientes');
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
}