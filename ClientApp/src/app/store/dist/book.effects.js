"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BookEffects = void 0;
var effects_1 = require("@ngrx/effects");
var operators_1 = require("rxjs/operators");
var types = require("./action.types");
var bookActions = require("./book.actions");
var BookEffects = /** @class */ (function () {
    function BookEffects(service, actions$) {
        var _this = this;
        this.service = service;
        this.actions$ = actions$;
        this.loadBooks$ = this.actions$.pipe(effects_1.ofType(types.LOAD_BOOKS), operators_1.mergeMap(function () {
            return _this.service.getAllBooks().pipe(operators_1.map(function (books) {
                return new bookActions.loadBookActionSuccess(books);
            }));
        }));
    }
    __decorate([
        effects_1.Effect()
    ], BookEffects.prototype, "loadBooks$");
    return BookEffects;
}());
exports.BookEffects = BookEffects;
