import { Component } from '@angular/core';

@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: ['./villanos.component.css']
})
export class VillanosComponent {

  nombre: string = 'Doomsday';
  edad: number = 1800;
  descripcion: string ='Super fuerza, vuelo y rayos Láser';
  id: number = 1;

  obtenerNombre(): string{
    return this.nombre + ' - '+ this.edad + ' - '+ this.descripcion;
  }

  cambiarNombre(): void{
    this.nombre = 'Abomination';
  }

  cambiarEdad(): void {
    this.edad = 45;
  }

  cambiarDescripcion(): string{
    return this.descripcion = 'Super fuerza e inteligencia';
  }

  cambiarId(): void{
    this.id = 2;
  }

get nombreMayusculas():string{
return this .nombre.toUpperCase();
}
poder = 30500;
base = 15000;
constructor() {}
ngOnit(): void{
}
acumular (valor: number){
  this.poder += valor;
  }
}
