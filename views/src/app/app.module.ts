import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { ValidationMessageComponent } from './components/errors/validation-message/validation-message.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FileModule } from './modules/file/file.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    ValidationMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
