import { Component, signal } from '@angular/core';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {

  services = signal<Service[]>([
    {
      id: 1,
      icon: 'fas fa-keyboard',
      title: 'Cerrando la brecha de habilidades digitales',
      description: `Samval se enfoca en llevar habilidades digitales esenciales, como el pensamiento computacional y la robótica,
       a comunidades marginadas, incluyendo grupos étnicos, cerrando así la brecha digital y brindando igualdad de oportunidades.`
    },
    {
      id: 2,
      icon: 'fas fa-piggy-bank',
      title: 'Formación para la Economía Digital',
      description: `Al preparar a los jóvenes en áreas de alta demanda tecnológica, Samval contribuye a formar el capital humano necesario para impulsar la economía digital de Colombia,
      reduciendo el déficit de profesionales en tecnología.`
    },
    {
      id: 3,
      icon: 'fas fa-chart-line',
      title: 'Ciencias y Tecnología',
      description: `La formación de talento digital fomenta el emprendimiento,
                                la creación de empleo en el sector tecnológico y atrae inversión,
                                contribuyendo al crecimiento económico sostenible del país.`
    },
    {
      id: 4,
      icon: 'fas fa-chalkboard',
      title: 'Desarrollo de Habilidades Cognitivas',
      description: `El pensamiento computacional fortalece habilidades cruciales como
                   el pensamiento crítico y la resolución de problemas, preparando a los
                    estudiantes para los desafíos de un mundo en constante cambio.`
    },
    {
      id: 5,
      icon: 'fas fa-landmark',
      title: 'Adaptación cultural',
      description: `La fundación tiene en cuenta la cosmovisión indígena y la implementa en
                   la manera de educar, respetando las lenguas maternas.`
    },
    {
      id: 6,
      icon: 'fas fa-laptop',
      title: 'Preparación para la Sociedad Digital',
      description: `Samval prepara a las nuevas generaciones para que participen activamente
                    en la transformación digital, asegurando que Colombia no se quede rezagada.`
    }
  ]);

}
