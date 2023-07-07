import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  // tablica declarations jest to tablica do deklarowania komponentów, a także dyrektyw i pipe których używamy w naszej aplikacji.
  // Proba użycia komponentu bez jego deklaracji tutaj skonczy się bledem.
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  // w tym miejscu importujemy moduły stworzone przez nas, ale nie tylko.
  // Można wykorzystać np moduły dostarczone przez Angulara, czy korzystać z zewnętrzyncyh źródeł(bibliotek).np moduł HTTP
  providers: [],
  // w miejscu tym informujemy aplikację o serwisach. Zazwyczaj zadeklarowany w tym miejscu "serwis" jest dostępny w całej naszej aplikacji.
  bootstrap: [AppComponent],
  // miejsce zadeklarowania komponentu, od którego zacznie się uruchamiać nasza aplikacja.
  // W angularze zazwyczaj jest tak, że wywołanie jednego komponentu spowoduje wywołanie kolejnych / tzw.drzewo komponentów.
  // Angular pozwala na posiadanie wielu modułów, które nazywane są "features modules".Każdy moduł reprezentuje oddzielną funkcjonalność.
  // Zawsze jednak jest AppModule, który splata wszystko w jedną całość.
})
export class AppModule {}

// SERWISY

// umieszczane w providers:[LoginService] / przyładowy serwis
// jest to zwykła klasa z dekoratorem @Injectable
// Głównym założeniem dla serwisów jest wykonywanie zadań dla komponentów w innych częściach aplikacji
// Serwis pomaga w przetwarzaniu danych i analizie. Wspomaga także, komunikację między komponentami.
// Serwisy powinny być odpowiedzialne za połącznia HTTP, logowanie błędów, autoryzację użytkowników, dzielnie danych między komponentami.
// Wykonują całą pracę, która nie powinna znaleźć się w komponencie.
// {Komponent} <- {Serwis} <=> {Komponent}
// Może być ich wiele w naszej aplikacji.
