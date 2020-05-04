import { Injectable } from "@angular/core";
import {Book} from '../models/models'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn:'root'
})

export class BooksServices{
  constructor(private http:HttpClient){}

  // public getBooks():Observable<Book[]>{
  //     return this.http.get<{book:Book[]}>('./assets/data/banco_de_dados.json').pipe(
  //       map(res => res.book)
  //     );
      
  // }
  
  public getBooks():Observable<Book[]> {
    return this.http.get<Book[]>('http://127.0.0.1:3000/Books/api/book');
  }

  public getBooksPorCategoria(category:string):Observable<Book[]>{
      return this.http.get<Book[]>(`http://127.0.0.1:3000/Books/api/book/category/${category}`)
  }

  public getBooksPorPorId(id:number):Observable<Book>{
      return this.http.get<Book>(`http://127.0.0.1:3000/Books/api/book/id/${id}`)

      
  }
  
  // public getBooksPorPorId(id:number):Promise<Book>{
  //   return this.http.get(`http://127.0.0.1:3000/Books/api/book/id/${id}`)
  //   .toPromise()
  //   .then((resposta:any) => resposta.shift())
  // }
  
}