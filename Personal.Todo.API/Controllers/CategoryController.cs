using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Personal.Todo.Business.Base;
using Personal.Todo.Domains.Post;

namespace Personal.Todo.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly IMainService _mainService;

        public CategoryController(IMainService mainService)
        {
            _mainService = mainService;
        }

        [HttpGet]
        [Route("GetCategories")]
        public IActionResult GetCategories()
        {
            var result = _mainService.TodoCategoryService.TodoCategoryGetAll();
            return Ok(result);
        }

        [HttpGet]
        [Route("GetAllInformation")]
        public IActionResult GetAllInformation()
        {
            var result = _mainService.TodoCategoryService.TodoCategoryGetAllWithTasks();
            return Ok(result);
        }

        [HttpPost]
        [Route("AddCategory")]
        public ActionResult AddCategory(TodoCategoryPostModel todoCategory)
        {
            try
            {
                _mainService.TodoCategoryService.TodoCategoryCreate(todoCategory);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.ToString());
            }
        }

        [HttpPut]
        [Route("UpdateCategory")]
        public ActionResult UpdateCategory(TodoCategoryPostModel todoCategory, int id)
        {
            try
            {
                _mainService.TodoCategoryService.TodoCategoryUpdate(todoCategory, id);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.ToString());
            }
        }

        [HttpDelete]
        [Route("DeleteCategory")]
        public ActionResult DeleteCategory(int id)
        {
            try
            {
                _mainService.TodoCategoryService.TodoCategoryDelete(id);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.ToString());
            }
        }
    }
}