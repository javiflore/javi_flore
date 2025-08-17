import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  projects = [
    { 
      name: 'Contador Continental', 
      description: 'Una aplicación para llevar el conteo de puntos en el juego de cartas Continental.', 
      link: '/continental-game' 
    },
    { name: 'Proyecto 2', description: 'Una breve descripción del Proyecto 2.', link: '/proyecto-2' },
    { name: 'Proyecto 3', description: 'Una breve descripción del Proyecto 3.', link: '/proyecto-3' },
    { name: 'Proyecto 4', description: 'Una breve descripción del Proyecto 4.', link: '/proyecto-4' }
  ];
  
}
