import { Component } from '@angular/core';
import { About } from "../../secciones/about/about";
import { Servicios } from "../../secciones/servicios/servicios";

@Component({
  selector: 'app-home',
  imports: [About, Servicios],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
