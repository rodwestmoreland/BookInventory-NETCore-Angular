"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BookService = void 0;
var core_1 = require("@angular/core");
var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
        this._baseURL = "api/Books";
    }
    BookService.prototype.getAllBooks = function () {
        return this.http.get(this._baseURL + "/GetBooksMan");
    };
    BookService.prototype.addBook = function (book) {
        return this.http.post(this._baseURL + "/AddBook", book);
    };
    BookService.prototype.getBookById = function (id) {
        return this.http.get(this._baseURL + "/SingleBook/" + id);
    };
    BookService.prototype.updateBook = function (book) {
        return this.http.put(this._baseURL + "/UpdateBook/" + book.id, book);
    };
    BookService.prototype.deleteBook = function (id) {
        return this.http["delete"](this._baseURL + "/DeleteBook/" + id);
    };
    BookService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], BookService);
    return BookService;
}());
exports.BookService = BookService;
