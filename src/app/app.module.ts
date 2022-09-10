import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactoComponent } from 'src/components/contacto/contacto.component';
import { AboutComponent } from 'src/components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
