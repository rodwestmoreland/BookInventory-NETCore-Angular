"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.BookReducer = exports.initialState = void 0;
var types = require("./action.types");
exports.initialState = {
    books: []
};
function BookReducer(state, action) {
    switch (action.type) {
        case types.LOAD_BOOKS_SUCCESS:
            {
                return __assign(__assign({}, state), { books: action.payload });
            }
        default:
            return state;
    }
}
exports.BookReducer = BookReducer;
