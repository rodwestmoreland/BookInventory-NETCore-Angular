"use strict";
exports.__esModule = true;
exports.loadBookActionSuccess = exports.loadBookAction = void 0;
var types = require("./action.types");
var loadBookAction = /** @class */ (function () {
    function loadBookAction() {
        this.type = types.LOAD_BOOKS;
    }
    return loadBookAction;
}());
exports.loadBookAction = loadBookAction;
var loadBookActionSuccess = /** @class */ (function () {
    function loadBookActionSuccess(payload) {
        this.payload = payload;
        this.type = types.LOAD_BOOKS_SUCCESS;
    }
    return loadBookActionSuccess;
}());
exports.loadBookActionSuccess = loadBookActionSuccess;
