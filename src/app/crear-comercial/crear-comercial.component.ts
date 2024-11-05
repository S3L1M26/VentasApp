import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpProviderService } from '../Service/http-provider.service';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crear-comercial',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './crear-comercial.component.html',
  styleUrl: './crear-comercial.component.css'
})
export class CrearComercialComponent {
  myForm3: FormGroup;
  showSuccessMessage: boolean = false;

  constructor(private httpProvider: HttpProviderService, private formBuilder: FormBuilder) {
  
    this.myForm3 = this.formBuilder.group({
      nombre: [''],
      apellido1: [''],
      apellido2: [''],
      comision: ['']
    });
  }

  async postComercial() {
    try {
      const comercial = this.myForm3.value;
      const res = await this.httpProvider.postComercial(comercial);
      console.log(res);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
    } catch (err) {
      console.log(err);
    }
  }
}
