using LI_Angular.Data;
using Microsoft.AspNetCore.Mvc;

namespace BooksController.Controllers
{
    [Route("api/[controller]")]
    public class BooksController : Controller
    {
        private IBookService _service;
        public BooksController(IBookService service)
        { _service = service; }

//Create        
        [HttpPost("AddBook")]
        public IActionResult AddBook([FromBody]Book book)
        {
            _service.AddBook(book);
            return Ok("Added");
        }

//Read
        [HttpGet]
        public IActionResult GetBooksMan()
        {
            var allBooks = _service.GetAllBooks();
            return Ok(allBooks);
        }
        [HttpGet("SingleBook/{id}")]
        public IActionResult GetBook(int id)
        {
            var selectBook = _service.GetBookById(id);
            return Ok(selectBook);
        }

//Update
        [HttpPut("UpdateBook/{id}")]
        public IActionResult UpdateBook(int id, [FromBody]Book book)
        {
            _service.UpdateBook(id, book);
            return Ok(book);
            
        }

//Delete
        [HttpDelete("DeleteBook/{id}")]
        public IActionResult DeleteBook(int id)
        {
            _service.DeleteBook(id);
            return Ok("Deleted");
        }
    }
}