import { Component, OnInit }  from '@angular/core';
import { FormBuilder, FormGroup, Validators }        from '@angular/forms';
import { Router } from '@angular/router';
import { BookService }        from 'src/app/services/book.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  addBookForm: FormGroup;
  public books:Book[];

  constructor(private service:BookService,
              private fb:     FormBuilder,
              private router: Router) { }
    
  ngOnInit() {
    
    this.addBookForm = this.fb.group({
      id:         [Math.floor(Math.random()*1000)],
      title:      [null, Validators.required ],
      author:     [null, Validators.required ],
      description:[null, Validators.required, Validators.minLength(5), Validators.maxLength(250) ],
      rate:       [null ],
      dateStart:  [null],
      dateEnd:    [null]
      
    })
  };

  onSubmit(){
    this.service.addBook(this.addBookForm.value)
                .subscribe(b => {
                  this.router.navigate(["/books"])
                });
  }

}
