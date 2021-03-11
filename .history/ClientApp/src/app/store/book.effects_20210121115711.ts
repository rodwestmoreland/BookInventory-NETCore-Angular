import { Actions } from "@ngrx/effects";
import { BookService } from "../services/book.service";

export class BookEffects{
    constructor(private service:BookService,
                private actions$:Actions){}
}