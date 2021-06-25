import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { HttpService } from './services/http.service';
import { FooterComponent } from './footer/footer.component';
import { MosiacComponent } from './mosiac/mosiac.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    HomeComponent,
    FooterComponent,
    MosiacComponent,
    ModalComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
