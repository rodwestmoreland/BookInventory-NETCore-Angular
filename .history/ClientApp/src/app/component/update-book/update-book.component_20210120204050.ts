import { Component, OnInit }                  from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router }             from '@angular/router';
import { BookService }                        from 'src/app/services/book.service';

@Component({
  selector: ' app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  updateBookForm: FormGroup;
  book:           Book;

  constructor(private service:  BookService,
              private router:   Router,
              private route:    ActivatedRoute,
              private fb:       FormBuilder) { }

  ngOnInit() {
    this.service.getBookById(this.route.snapshot.params.id)
                .subscribe(data => { this.book = data; 
    this.updateBookForm = this.fb.group({
      id:         [data.id],
      title:      [data.title ],
      author:     ["test" ],
      description:["test" ],
      rate:       [3],
      dateStart:  [null],
      dateEnd:    [null]
    })
                });

  }//ngOnInit
}//end class
// id:         [3],
// title:      ["test",       Validators.required ],
// author:     ["test",      Validators.required ],
// description:["test", Validators.required, Validators.minLength(5), Validators.maxLength(250) ],
// rate:       [3],
// dateStart:  [null],
// dateEnd:    [null]