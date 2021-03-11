import { Actions, Effect, ofType }  from "@ngrx/effects";
import { Action }                   from "@ngrx/store";
import { Observable }               from "rxjs";
import { mergeMap, map }            from 'rxjs/operators';
import * as types                   from './action.types';
import * as bookActions             from './book.actions';
import { BookService }              from "../services/book.service";

export class BookEffects{
    constructor(private service:BookService,
                private actions$:Actions){}
    
    @Effect() loadBooks$: Observable<Action> = this.actions$.pipe(
        ofType<bookActions.loadBookAction>(types.LOAD_BOOKS),
        mergeMap(() =>
            this.service.getAllBooks().pipe(map(books => 
                new bookActions.loadBookActionSuccess(books)))
        )
    )
}