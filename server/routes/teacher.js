const teacherRoute = require("express").Router()
const TeacherController = require("../controllers/TeacherControllers");

teacherRoute.get("/", TeacherController.getTeachers);
teacherRoute.get("/details/:id", TeacherController.getTeacherById);
teacherRoute.get("/add", TeacherController.addTeacherPage);
teacherRoute.post("/add", TeacherController.addTeacher);
teacherRoute.get("/delete/:id", TeacherController.deleteTeacher);
teacherRoute.get("/update/:id", TeacherController.editTeacherPage);
teacherRoute.post("/update/:id", TeacherController.editTeacher);

module.exports = teacherRoute;
