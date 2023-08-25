using Microsoft.AspNetCore.Mvc;
using Personal.Todo.Business.Base;
using Personal.Todo.Domains.Post;

namespace Personal.Todo.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly IMainService _mainService;

        public TaskController(IMainService mainService)
        {
            _mainService = mainService;
        }

        [HttpGet]
        [Route("GetTasks")]
        public IActionResult GetTasks()
        {
            var result = _mainService.TodoItemService.TodoTaskGetAll();
            return Ok(result);
        }

        [HttpGet]
        [Route("GetTaskById")]
        public IActionResult GetTaskById(int id)
        {
            var result = _mainService.TodoItemService.TodoTaskGetById(id);
            return Ok(result);
        }

        [HttpGet]
        [Route("GetTaskByCategoryId")]
        public IActionResult GetTaskByCategoryId(int categoryId)
        {
            var result = _mainService.TodoItemService.TodoTaskGetByCategoryId(categoryId);
            return Ok(result);
        }

        [HttpGet]
        [Route("GetTaskWithDateList")]
        public IActionResult GetTaskWithDateList(string date)
        {
            var result = _mainService.TodoItemService.TodoTaskGetWithDateList(date);
            return Ok(result);
        }

        [HttpGet]
        [Route("GetTaskByCategoryIdWithDate")]
        public IActionResult GetTaskByCategoryIdWithDate(int categoryId, string date)
        {
            var result = _mainService.TodoItemService.TodoTaskGetByCategoryIdWithDate(categoryId, date);
            return Ok(result);
        }

        [HttpGet]
        [Route("GetTaskByPriority")]
        public IActionResult GetTaskByPriority(int priority)
        {
            var result = _mainService.TodoItemService.TodoTaskGetByPriority(priority);
            return Ok(result);
        }

        [HttpGet]
        [Route("GetTaskByPriorityWithDate")]
        public IActionResult GetTaskByPriorityWithDate(int priority, string date)
        {
            var result = _mainService.TodoItemService.TodoTaskGetByPriorityWithDate(priority, date);
            return Ok(result);
        }

        [HttpGet]
        [Route("GetTaskByPriorityWithDateAndCategoryId")]
        public IActionResult GetTaskByPriorityWithDateAndCategoryId(int priority, string date, int categoryId)
        {
            var result = _mainService.TodoItemService.TodoTaskGetByPriorityWithDateAndCategoryId(priority, date, categoryId);
            return Ok(result);
        }

        [HttpGet]
        [Route("GetTaskByPriorityAndCategoryId")]
        public IActionResult GetTaskByPriorityAndCategoryId(int priority, int categoryId)
        {
            var result = _mainService.TodoItemService.TodoTaskGetByPriorityAndCategoryId(priority, categoryId);
            return Ok(result);
        }

        [HttpPost]
        [Route("AddTask")]
        public ActionResult AddTask(TodoTaskPostModel todoTask)
        {
            try
            {
                _mainService.TodoItemService.TodoTaskCreate(todoTask);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.ToString());
            }
        }

        [HttpPut]
        [Route("UpdateTask")]
        public ActionResult UpdateTask(TodoTaskPostModel todoTask)
        {
            try
            {
                _mainService.TodoItemService.TodoTaskUpdate(todoTask);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.ToString());
            }
        }

        [HttpDelete]
        [Route("DeleteTask")]
        public ActionResult DeleteTask(int id)
        {
            try
            {
                _mainService.TodoItemService.TodoTaskDelete(id);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.ToString());
            }
        }
    }
}
