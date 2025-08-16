import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'javi_flore';

  selectedPage = 'inicio';

  
  
  viewClicked(event: string){
    this.selectedPage = event;
    this.scrollUp();
  }

  scrollUp() {
    window.scrollTo(0, 0);
  }

}
