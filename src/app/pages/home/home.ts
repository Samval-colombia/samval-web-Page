import { Component } from '@angular/core';
import { About } from "../../secciones/about/about";
import { Servicios } from "../../secciones/servicios/servicios";
import { Events } from "../../secciones/events/events";
import { Blog } from "../../secciones/blog/blog";
import { Carrusel } from "../../secciones/carrusel/carrusel";

@Component({
  selector: 'app-home',
  imports: [About, Servicios, Events, Blog, Carrusel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
