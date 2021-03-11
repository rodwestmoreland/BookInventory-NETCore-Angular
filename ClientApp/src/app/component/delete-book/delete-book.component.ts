import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { AppState } from 'src/app/store/app.state';
import * as bookActions from './../../store/book.actions';

@Component({
  selector:   'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls:  ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  book: Book;
  public book$: Observable<any>;

  constructor(private store: Store<AppState>,
              private route:    ActivatedRoute,
              private router:   Router,
              private service:  BookService) {
                this.book$ = this.store.select<any>("applicationState");
               }

  ngOnInit() {
     this.service.getBookById(this.route.snapshot.params.id)
                 .subscribe( b => { this.book = b; });  
    
    
  }

  deleteBook(id:number){
    this.store.dispatch(new bookActions.deleteBookAction(id));
 
  }

}
