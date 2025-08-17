import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayerSetupComponent } from './player-setup/player-setup.component';

@Component({
  selector: 'app-continental-game',
  standalone: true,
  imports: [CommonModule, FormsModule, PlayerSetupComponent],
  templateUrl: './continental-game.component.html',
  styleUrl: './continental-game.component.css'
})
export class ContinentalGameComponent {
  // Muestra la pantalla de configuración si es falso
  showGame: boolean = false;
  // Almacena los nombres de los jugadores
  playerNames: string[] = [];

  // Datos de las rondas del juego
  rounds = [
    { rule: '2 tríos', cards: 7 },
    { rule: '1 trío y 1 escalera', cards: 8 },
    { rule: '2 escaleras', cards: 9 },
    { rule: '3 tríos', cards: 10 },
    { rule: '2 tríos y 1 escalera', cards: 11 },
    { rule: '1 trío y 2 escaleras', cards: 12 },
    { rule: '3 escaleras', cards: 13 }
  ];

  // Array para almacenar las puntuaciones de cada jugador en cada ronda
  scores: number[][] = [];
  // Array para almacenar el sumatorio de puntos de cada jugador
  totalScores: number[] = [];
  // Array para el ranking
  ranking: { name: string, score: number }[] = [];

  // Se ejecuta cuando el componente de configuración de jugadores emite el evento
  onPlayersReady(names: string[]): void {
    this.playerNames = names;
    // Inicializa el array de puntuaciones y el de sumatorios
    this.scores = new Array(this.rounds.length).fill(0).map(() => new Array(this.playerNames.length).fill(0));
    this.totalScores = new Array(this.playerNames.length).fill(0);
    this.showGame = true; // Muestra la tabla del juego
  }

  // Calcula el sumatorio de puntos de un jugador
  calculateTotal(playerIndex: number): void {
    const total = this.scores.map(roundScores => roundScores[playerIndex]).reduce((sum, current) => sum + current, 0);
    this.totalScores[playerIndex] = total;
    this.updateRanking(); // Actualiza el ranking cada vez que se modifica una puntuación
  }

  // Actualiza el ranking
  updateRanking(): void {
    this.ranking = this.playerNames.map((name, index) => ({
      name,
      score: this.totalScores[index]
    })).sort((a, b) => a.score - b.score);
  }
}