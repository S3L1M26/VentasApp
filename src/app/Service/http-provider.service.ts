import { Injectable } from '@angular/core';
import Axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor() { }

  async getClientes() {
    try {
      const response = await Axios.get('http://127.0.0.1:8000/api/clientes');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
