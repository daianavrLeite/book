import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {FictionComponent} from './fiction/fiction.component'
import { RomanceComponent } from './romance/romance.component';
import { OfertaIndividualComponent } from './oferta-individual/oferta-individual.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { OrderBuyComponent } from './order-buy/order-buy.component';
import{ModalComponent} from './modal/modal.component'


export const ROUTES:Routes=[
  {path: '', component:HomeComponent},
  {path:'fiction', component:FictionComponent},
  {path:'romance', component:RomanceComponent},
  {path:'ofertaIndividual', component:OfertaIndividualComponent},
  {path:'ofertaIndividual/:id', component:OfertaIndividualComponent},
  {path:'contact', component:ContactsComponent},
  {path:'carrinho', component:CarrinhoComponent},
  {path:'ordem-compra', component:OrderBuyComponent},
  {path:'modal', component:ModalComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
