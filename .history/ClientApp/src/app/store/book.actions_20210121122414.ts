import { Action } from "@ngrx/store";
import * as types from "./action.types";

export class loadBookAction implements Action{
    
    readonly type = types.LOAD_BOOKS;

}

export class loadBookActionSuccess implements Action{
    
    readonly type = types.LOAD_BOOKS_SUCCESS;
    constructor(public payload:Book[]){}
}

export type Actions = loadBookAction | loadBookActionSuccess