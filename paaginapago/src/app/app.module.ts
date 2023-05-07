import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CreditCarComponent } from './components/credit-car/credit-car.component';
import { TicketComponent } from './components/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CreditCarComponent,
    TicketComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
