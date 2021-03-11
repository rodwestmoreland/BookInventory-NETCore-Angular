"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var nav_menu_component_1 = require("./component/nav-menu/nav-menu.component");
var home_component_1 = require("./component/home/home.component");
var delete_book_component_1 = require("./component/delete-book/delete-book.component");
var books_component_1 = require("./component/books/books.component");
var new_book_component_1 = require("./component/new-book/new-book.component");
var show_book_component_1 = require("./component/show-book/show-book.component");
var update_book_component_1 = require("./component/update-book/update-book.component");
var book_service_1 = require("./services/book.service");
var store_1 = require("@ngrx/store");
var book_reducer_1 = require("./store/book.reducer");
var effects_1 = require("@ngrx/effects");
var book_effects_1 = require("./store/book.effects");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_menu_component_1.NavMenuComponent,
                home_component_1.HomeComponent,
                delete_book_component_1.DeleteBookComponent,
                books_component_1.BooksComponent,
                new_book_component_1.NewBookComponent,
                show_book_component_1.ShowBookComponent,
                update_book_component_1.UpdateBookComponent
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
                http_1.HttpClientModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
                    { path: 'books', component: books_component_1.BooksComponent },
                    { path: 'new-book', component: new_book_component_1.NewBookComponent },
                    { path: 'update-book/:id', component: update_book_component_1.UpdateBookComponent },
                    { path: 'delete-book/:id', component: delete_book_component_1.DeleteBookComponent },
                    { path: 'show-book/:id', component: show_book_component_1.ShowBookComponent }
                ]),
                store_1.StoreModule.forRoot({ applicationState: book_reducer_1.BookReducer }),
                effects_1.EffectsModule.forRoot([book_effects_1.BookEffects])
            ],
            providers: [book_service_1.BookService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
