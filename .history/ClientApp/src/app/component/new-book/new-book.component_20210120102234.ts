import { Component, OnInit }  from '@angular/core';
import { FormBuilder, FormGroup }        from '@angular/forms';
import { BookService }        from 'src/app/services/book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  constructor(private service:BookService,
              private fb: FormBuilder) { }
  
  addBookForm: FormGroup;
  public books:Book[];

  ngOnInit() {
    this.service.addBook(id)
                .subscribe(b => { this.books.id ; })
  };

}
