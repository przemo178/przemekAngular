import { Component } from '@angular/core';

@Component({
  // komponent to klasa, która posiada dekor @Component. Zajmuje się wyświetlaniem w widoku HTML i obsługą zdarzeń jaką wywoła użytkownik.
  // Służy zazwyczaj do wyświetlania danych i komunikacji z użytkownikiem.
  // Aplikacja zazwyczaj odpala się od jednego komponentu jakim jest "AppComponent".
  // Komponent, który posiada w sobie inny komponent jest rodzicem tzw "Parent component".
  // Komponent, który jest w innym komponencie jest dzieckiem tzw "Child component".
  // Idea Angulara jest ich komponentowość, czyli w skrócie umieszczanie komponentów w innych komponentach.
  // Nie zaleca się tworzenia aplikacji w jednym koponencie!
  // Każdy komponent powinien pełnić oddzielną funkcję przeznaczoną tylko dla niego.
  // Taka praktyka pozwala na utrzymanie czystośći w kodzie, architekturze i utrzymaniu aplikacji.
  // Każdy nowy komponent musi być zadeklarowny w jakimś module! Inaczej aplikacja nie dowie się że taki komponent istnieje.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mical-angular';
}
