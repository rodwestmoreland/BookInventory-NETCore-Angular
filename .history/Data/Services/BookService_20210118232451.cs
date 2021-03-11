using System.Collections.Generic;
using System.Linq;

namespace LI_Angular.Data
{
    public class BookService : IBookService
    {

        //Create
        public void AddBook(Book newBook)
        {
            Data.Books.Add(newBook);
        }
        
        //Read
        public List<Book> GetAllBooks()
        {
            return Data.Books.ToList();
        }

        public Book GetBookById(int id)
        {
            var oneBook = Data.Books.FirstOrDefault(b => b.Id == id);
            return oneBook;
        }
        
        //Update
        public void UpdateBook(int id, Book newBook)
        {
            var oldBook = Data.Books.FirstOrDefault(b => b.Id == id);
            if(oldBook != null){
                oldBook.Title =         newBook.Title;
                oldBook.Author =        newBook.Author;
                oldBook.Description =   newBook.Description;
                oldBook.Rate =          newBook.Rate;
                oldBook.DateStart =     newBook.DateStart;
                oldBook.DateEnd =       newBook.DateEnd;
            }
            
        }

        //Delete
        public void DeleteBook(int id)
        {
            var removeBook = Data.Books.FirstOrDefault(b=>b.Id == id);
            Data.Books.Remove(removeBook);
        }


    }
}