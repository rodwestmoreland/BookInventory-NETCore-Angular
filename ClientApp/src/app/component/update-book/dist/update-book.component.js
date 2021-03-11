"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdateBookComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var UpdateBookComponent = /** @class */ (function () {
    function UpdateBookComponent(service, router, route, fb) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.fb = fb;
    }
    UpdateBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getBookById(this.route.snapshot.params.id)
            .subscribe(function (b) {
            _this.book = b;
            _this.updateBookForm = _this.fb.group({
                id: [b.id],
                title: [b.title],
                author: [b.author],
                description: [b.description],
                rate: [b.rate],
                dateStart: [_this.uniformDate(b.dateStart)],
                dateEnd: [_this.uniformDate(b.dateEnd)]
            });
        });
    }; //ngOnInit
    UpdateBookComponent.prototype.uniformDate = function (date) {
        if (date) {
            return common_1.formatDate(date, 'yyyy-MM-dd', "en");
        }
    };
    UpdateBookComponent.prototype.onSubmit = function () {
        var _this = this;
        this.service.updateBook(this.updateBookForm.value)
            .subscribe(function (b) {
            _this.router.navigate(["/books"]);
        });
    };
    UpdateBookComponent = __decorate([
        core_1.Component({
            selector: ' app-update-book',
            templateUrl: './update-book.component.html',
            styleUrls: ['./update-book.component.css']
        })
    ], UpdateBookComponent);
    return UpdateBookComponent;
}()); //end class
exports.UpdateBookComponent = UpdateBookComponent;
