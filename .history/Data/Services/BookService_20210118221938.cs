using System.Collections.Generic;

namespace LI_Angular.Data
{
    public class BookService : IBookService
    {
        public void AddBook(Book newBook)
        {
            Data.Books.Add(newBook);
        }

        public void DeleteBook(int id)
        {
            throw new System.NotImplementedException();
        }

        public List<Book> GetAllBooks()
        {
            throw new System.NotImplementedException();
        }

        public Book GetBookById(int id)
        {
            throw new System.NotImplementedException();
        }

        public void UpdateBook(int id, Book newBook)
        {
            throw new System.NotImplementedException();
        }
    }
}