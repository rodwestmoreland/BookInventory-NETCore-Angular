using System.Collections.Generic;

namespace LI_Angular.Data
{
    public interface IBookService
    {
        void AddBook(Book newBook);
        List<Book> GetAllBooks();
        Book GetBookById(int id);
        void UpdateBook(int id, Book newBook);
        void DeleteBook(int id);
        

    }
}