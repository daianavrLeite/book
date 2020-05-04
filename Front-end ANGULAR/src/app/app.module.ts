import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule,ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopoComponent } from './topo/topo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FictionComponent } from './fiction/fiction.component';
import { RomanceComponent } from './romance/romance.component';
import { OfertaIndividualComponent } from './oferta-individual/oferta-individual.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {CarrinhoService} from './services/carrinho';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ModalComponent } from './modal/modal.component'
import { OrderBuyComponent } from './order-buy/order-buy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopoComponent,
    NavbarComponent,
    FictionComponent,
    RomanceComponent,
    OfertaIndividualComponent,
    ContactsComponent,
    CarouselComponent,
    FooterComponent,
    OrderBuyComponent,
    CarrinhoComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [CarrinhoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
