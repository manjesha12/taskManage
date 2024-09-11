# taskManage
Task Manage 

Before starting please run npm install
and use the follow urls in POSTMAN:

Method:POST
URL: http://localhost:3000/api/tasks
Body (JSON):
{
  "title": "Sample Task",
  "description": "This is a sample task.",
  "dueDate": "2024-09-30"
}

Method: GET
URL: http://localhost:3000/api/tasks

Method: PUT
URL: http://localhost:3000/api/tasks/<task_id>
Body (JSON):
{
  "title": "Updated Task",
  "status": "Completed"
}


Method: DELETE
URL: http://localhost:3000/api/tasks/<task_id>


