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
        
        [HttpPost("AddBook")]
        public IActionResult AddBook([FromBody]Book book)
        {
            _service.AddBook(book);
            return Ok("Added");
        }
    }
}