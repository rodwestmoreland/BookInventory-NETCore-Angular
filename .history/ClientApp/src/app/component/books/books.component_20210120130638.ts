import { Component, OnInit }  from '@angular/core';
import { BookService }        from 'src/app/services/book.service';
import { Router }             from '@angular/router';

@Component({
  selector:   'app-books',
  templateUrl: './books.component.html',
  styleUrls:  ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  public books:Book[];

  constructor(private service:BookService,
              private router: Router ) { }

  ngOnInit() {
    this.service.getAllBooks()
                .subscribe(b => { this.books = b; })
  };

  showBook(id:number){
    this.
  }

}
