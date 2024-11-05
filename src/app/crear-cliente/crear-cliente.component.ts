import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpProviderService } from '../Service/http-provider.service';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crear-cliente',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './crear-cliente.component.html',
  styleUrl: './crear-cliente.component.css'
})
export class CrearClienteComponent {
  myForm: FormGroup;
  showSuccessMessage: boolean = false;

  constructor(private httpProvider: HttpProviderService, private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      nombre: [''],
      apellido1: [''],
      apellido2: [''],
      ciudad: [''],
      categoria: [''],
    });
  }

  async postCliente() {
    try {
      const cliente = this.myForm.value;
      const res = await this.httpProvider.postCliente(cliente);
      console.log(res);
      console.log(this.myForm.value);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
    } catch (err) {
      console.log(err);
      console.log(this.myForm.value);
    }
  }

}
