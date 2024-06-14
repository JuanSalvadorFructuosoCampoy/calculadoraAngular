import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule], //Añadimos el FormsModule para poder usar el ngModel en el template app.component.html, usando el binding bidireccional
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mini Calculadora';
  //Ponemos los tres números de la calculadora. Los inicializamos a 0 para que no haya problemas
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  //Método que suma los dos números
  sumar(): void {
    this.resultado = this.numero1 + this.numero2;
  }
}
