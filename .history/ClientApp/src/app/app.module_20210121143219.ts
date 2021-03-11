import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule, ReactiveFormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule }     from '@angular/router';

import { AppComponent }         from './app.component';
import { NavMenuComponent }     from './component/nav-menu/nav-menu.component';
import { HomeComponent }        from './component/home/home.component';
import { DeleteBookComponent }  from './component/delete-book/delete-book.component';
import { BooksComponent }       from './component/books/books.component';
import { NewBookComponent }     from './component/new-book/new-book.component';
import { ShowBookComponent }    from './component/show-book/show-book.component';
import { UpdateBookComponent }  from './component/update-book/update-book.component';

import { BookService }          from './services/book.service';
import { StoreModule } from '@ngrx/store';
import { BookReducer } from './store/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/book.effects';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    DeleteBookComponent,
    BooksComponent,
    NewBookComponent,
    ShowBookComponent,
    UpdateBookComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '',                 component: HomeComponent,  pathMatch: 'full' },
      { path: 'books',            component: BooksComponent },
      { path: 'new-book',         component: NewBookComponent },
      { path: 'update-book/:id',  component: UpdateBookComponent },
      { path: 'delete-book/:id',  component: DeleteBookComponent },
      { path: 'show-book/:id',    component: ShowBookComponent }

    ]),
    StoreModule.forRoot({applicationState:BookReducer}),
    EffectsModule.forRoot([BookEffects])
  ],
  providers: [ BookService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
