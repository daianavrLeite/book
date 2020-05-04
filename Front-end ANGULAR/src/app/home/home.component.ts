import { Component, OnInit } from '@angular/core';
import {BooksServices} from '../services/servicos';
import {Book} from '../models/models'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public AtributoBook:Book[]


  constructor(private ofertasBook:BooksServices) { }

  ngOnInit() {
    this.ofertasBook.getBooks().subscribe(
    (book:Book[])=>this.AtributoBook=book,
    (param:any)=> console.log(param)
  )
  }

}
