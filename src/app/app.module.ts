import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

/** Configuración del local de la app */
import localEsHN from '@angular/common/locales/es-HN';
import localfrCa from '@angular/common/locales/fr-CA';

import { registerLocaleData } from "@angular/common";

registerLocaleData(localEsHN);
registerLocaleData(localfrCa);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-HN' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
