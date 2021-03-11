"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BooksComponent = void 0;
var core_1 = require("@angular/core");
var bookActions = require("./../../store/book.actions");
var BooksComponent = /** @class */ (function () {
    function BooksComponent(store, router) {
        this.store = store;
        this.router = router;
        this.books$ = this.store.select("applicationState");
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.service.getAllBooks().subscribe(data => {
        //   this.books = data;
        // })
        this.store.dispatch(new bookActions.loadBooksAction());
        this.books$.subscribe(function (state) { return _this.books = state.books; });
    };
    BooksComponent.prototype.showBook = function (id) {
        this.router.navigate(["/show-book/" + id]);
    };
    BooksComponent.prototype.updateBook = function (id) {
        this.router.navigate(["/update-book/" + id]);
    };
    BooksComponent.prototype.deleteBook = function (id) {
        this.router.navigate(["/delete-book/" + id]);
    };
    BooksComponent = __decorate([
        core_1.Component({
            selector: 'app-books',
            templateUrl: './books.component.html',
            styleUrls: ['./books.component.css']
        })
    ], BooksComponent);
    return BooksComponent;
}());
exports.BooksComponent = BooksComponent;
