import { Component, OnInit }  from '@angular/core';
import { BookService }        from 'src/app/services/book.service';
import { Router }             from '@angular/router';
import { Observable }         from 'rxjs';
import { AppState }           from 'src/app/store/book.state';
import { Store }              from '@ngrx/store';

@Component({
  selector:   'app-books',
  templateUrl: './books.component.html',
  styleUrls:  ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  public books:Book[];
  public books$: Observable<any>;

  constructor(private store:  Store<AppState>,
              private router: Router ) { }

  ngOnInit() {
    this.service.getAllBooks()
                .subscribe(b => { this.books = b; })
  };

  showBook(id:number){
    this.router.navigate(["/show-book/"+id]);
  }

  deleteBook(id:number){
    this.router.navigate(["/delete-book/"+id]);
  }

}
