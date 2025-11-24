import { Component } from '@angular/core';
import { About } from "../../secciones/about/about";
import { Servicios } from "../../secciones/servicios/servicios";
import { Events } from "../../secciones/events/events";

@Component({
  selector: 'app-home',
  imports: [About, Servicios, Events],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
