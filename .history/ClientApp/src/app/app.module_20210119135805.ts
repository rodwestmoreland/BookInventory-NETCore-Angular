import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DeleteBookComponent } from './component/delete-book/delete-book.component';
import { BooksComponent } from './component/books/books.component';
import { NewBookComponent } from './component/new-book/new-book.component';
import { ShowBookComponent } from './component/show-book/show-book.component';
import { UpdateBookComponent } from './component/update-book/update-book.component';
import { BookService } from './services/book.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
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
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [ BookService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
