import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

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
                .subscribe(b => { this.book = b;         });
  }

  this.updateBookForm = this.fb.group({
    id:         [Math.floor(Math.random()*1000)],
    title:      [null, Validators.required ],
    author:     [null, Validators.required ],
    description:[null, Validators.required, Validators.minLength(5), Validators.maxLength(250) ],
    rate:       [null ],
    dateStart:  [null],
    dateEnd:    [null]
    
  })
};


}