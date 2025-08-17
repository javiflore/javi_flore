import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-player-setup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './player-setup.component.html',
  styleUrl: './player-setup.component.css'
})
export class PlayerSetupComponent {
  // Emite un evento cuando se confirma la configuración de los jugadores
  @Output() playersReady = new EventEmitter<string[]>();
  
  // Número de jugadores seleccionado (valor inicial)
  numPlayers: number = 2;
  // Array para almacenar los nombres de los jugadores
  playerNames: string[] = ['', ''];
  
  // Maneja el cambio en el número de jugadores
  onNumPlayersChange(): void {
    // Redimensiona el array de nombres según el número de jugadores
    this.playerNames = new Array(this.numPlayers).fill('');
  }
  
  // Comprueba si todos los nombres de los jugadores están rellenos
  get areAllNamesFilled(): boolean {
    return this.playerNames.every(name => name.trim() !== '');
  }

  // Se ejecuta al hacer clic en el botón "Siguiente"
  startGame(): void {
    if (this.areAllNamesFilled) {
      this.playersReady.emit(this.playerNames);
    }
  }
}