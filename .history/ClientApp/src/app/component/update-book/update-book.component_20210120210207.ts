import { formatDate } from '@angular/common';
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
  formattedDate:  Date;

  constructor(private service:  BookService,
              private router:   Router,
              private route:    ActivatedRoute,
              private fb:       FormBuilder) { }
  
  ngOnInit() {
    this.service.getBookById(this.route.snapshot.params.id)
                .subscribe(b => { this.book = b; 
    this.updateBookForm = this.fb.group({
      id:         [b.id],
      title:      [b.title ],
      author:     [b.author ],
      description:[b.description ],
      rate:       [b.rate ],
      dateStart:  [b.dateStart ],
      dateEnd:    [b.dateEnd ]
    })
                });

  
  }//ngOnInit
  
  uniformDate(date:Date){
    return formatDate(date,'dd-mm-yyyy',"en");
  }

}//end class
