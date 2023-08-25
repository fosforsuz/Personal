enum Endpoints {
    GET_CATEGORY = 'Category/GetCategories',
    GET_ALL_INFORMATION = 'Category/getAllConfirmation',
    ADD_CATEGORY = "Category/addCategory",
    UPDATE_CATEGORY = "Category/updateCategory",
    DELETE_CATEGORY = "Category/deleteCategory",

    TASK_GET_ALL = "Task/GetTasks",
    TASK_BY_ID = "Task/GetTaskById",
    GET_TASK_BY_CATEGORY = "Task/GetTaskByCategoryId",
    GET_TASK_WITH_DATE = "Task/GetTaskWithDateList",
    GET_TASK_BY_CATEGORY_AND_DATE = "Task/GetTaskByCategoryIdWithDate",
    GET_TASK_BY_PRIORITY = "Task/GetTaskByPriority",
    GET_TASK_BY_PRIORITY_AND_DATE = "Task/GetTaskByPriorityWithDate",
    GET_TASK_PRIORITY_CATEGORY_DATE = "GTask/etTaskByPriorityWithDateAndCategoryId",
    GET_TASK_PRIORITY_AND_CATEGORYID = "Task/GetTaskByPriorityAndCategoryId",
    ADD_TASK = "AddTask",
    UPDATE_TASK = "UpdateTask",
    DELETE_TASK = "DeleteTask",
}

export default Endpoints;