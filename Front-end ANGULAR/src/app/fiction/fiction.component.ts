import { Component, OnInit } from '@angular/core';
import {BooksServices} from '../services/servicos'
import {Book} from '../models/models'

@Component({
  selector: 'app-fiction',
  templateUrl: './fiction.component.html',
  styleUrls: ['./fiction.component.css']
})
export class FictionComponent implements OnInit {


  public AtributoFiction: Book[]

  constructor( private ofertasBook:BooksServices) { }

  ngOnInit() {

    this.ofertasBook.getBooksPorCategoria('fiction').subscribe(
      (book:Book[])=>this.AtributoFiction=book,
      (param:any)=>console.log(param)
    )
  }
 
}
