import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  contenido = signal({
    title: 'Aprende sobre nosotros',
    subtitle: 'Transformamos vidas a través de la educación',
    description: `La Fundación Samval, es una entidad sin ánimo de lucro tiene como sustento filosòfico el
                  fortalecimiento de la dignidad humana, la conservación del planeta tierra, el incentivo de la
                   prosperidad como base fundamental del ascenso social, usando para ello la educación, la ciencia e innovación.
                   Siendo la educación el pilar de la PAZ, de tal manera que los grupos sociales o territorios logren la articulación entre los diversos actores que intervienen en la vida cotidiana; los gobiernos, la academia, la empresa.`,
    mission: {
      title: 'Nuestra Misión',
      text: `Contribuir con el incentivo de la educación como base fundamental de la sociedad, usando para ello el pensamiento computacional, la ciencia e innovación y la paz.`
    },
    vision: {
      title: 'Nuestra Visión',
      text: `Ser reconocida como una institución líder en el fortalecimiento de la educación,
            pilar de la PAZ de tal manera que las naciones logren la articulación entre los diversos actores que intervienen en la sociedad; los gobiernos, la academia, las empresas.`
    },
    image: '/assets/about.jpg'
  })

}
