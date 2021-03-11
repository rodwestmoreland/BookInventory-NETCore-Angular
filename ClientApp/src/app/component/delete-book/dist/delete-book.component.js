"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DeleteBookComponent = void 0;
var core_1 = require("@angular/core");
var bookActions = require("./../../store/book.actions");
var DeleteBookComponent = /** @class */ (function () {
    function DeleteBookComponent(store, route, router, service) {
        this.store = store;
        this.route = route;
        this.router = router;
        this.service = service;
        this.book$ = this.store.select("applicationState");
    }
    DeleteBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getBookById(this.route.snapshot.params.id)
            .subscribe(function (b) { _this.book = b; });
    };
    DeleteBookComponent.prototype.deleteBook = function (id) {
        this.store.dispatch(new bookActions.deleteBookAction(id));
    };
    DeleteBookComponent = __decorate([
        core_1.Component({
            selector: 'app-delete-book',
            templateUrl: './delete-book.component.html',
            styleUrls: ['./delete-book.component.css']
        })
    ], DeleteBookComponent);
    return DeleteBookComponent;
}());
exports.DeleteBookComponent = DeleteBookComponent;
