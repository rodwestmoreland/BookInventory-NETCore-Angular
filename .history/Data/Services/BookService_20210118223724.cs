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
            throw new System.NotImplementedException();
        }
        
        //Update
        public void UpdateBook(int id, Book newBook)
        {
            throw new System.NotImplementedException();
        }

        //Delete
        public void DeleteBook(int id)
        {
            throw new System.NotImplementedException();
        }


    }
}