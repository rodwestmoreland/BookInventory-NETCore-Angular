import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  _baseURL:string = "api/Books";
  
  constructor(private http:HttpClient) { }

  getAllBooks(){
    return this.http.get<Book[]>(this._baseURL+"/GetBooksMan");
  }

  addBook(book: Book){
    return this.http.post(this._baseURL+"/AddBook",book);
  }

  getBookById(id:number){
    return this.http.get<Book>(this._baseURL+"/SingleBook/"+id);
  }

  updateBook(id:number){
    return this.http.get<Book>(this._baseURL+"/UpdateBook/"+id);
  }

}
