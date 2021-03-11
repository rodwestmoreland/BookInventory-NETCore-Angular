import { Component, OnInit }  from '@angular/core';

import { Router }             from '@angular/router';
import { Observable }         from 'rxjs';
import { AppState }           from 'src/app/store/book.state';
import { Store }               from '@ngrx/store';
import * as bookActions from 'src/app/store/book.actions';

@Component({
  selector:   'app-books',
  templateUrl: './books.component.html',
  styleUrls:  ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  public books: Book[];
  public books$:Observable<any>;

  constructor(private store:  Store<AppState>,
              private router: Router ) {
                this.books$ = this.store.select("applicationState");
               }

  ngOnInit() {
    this.store.dispatch(new bookActions.loadBookAction());
    this.books$.subscribe((state:AppState) => this.books = state.books);
  };

  showBook(id:number){
    this.router.navigate(["/show-book/"+id]);
  }

  deleteBook(id:number){
    this.router.navigate(["/delete-book/"+id]);
  }

}
