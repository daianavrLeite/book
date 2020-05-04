import { Component, OnInit } from '@angular/core';
import { Book } from '../models/models';
import { BooksServices } from '../services/servicos';

@Component({
  selector: 'app-romance',
  templateUrl: './romance.component.html',
  styleUrls: ['./romance.component.css']
})
export class RomanceComponent implements OnInit {

  public AtributoRomance: Book[]

  constructor( private ofertaRomance:BooksServices) { }

  ngOnInit() {
    this.ofertaRomance.getBooksPorCategoria('romance').subscribe(
      (book:Book[])=>this.AtributoRomance=book,
      (param:any)=>console.log(param)
    )
  }



}
