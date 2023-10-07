const subjectRoute = require("express").Router()
const subjectController = require("../controllers/SubjectControllers");

subjectRoute.get("/", subjectController.getSubjects);
subjectRoute.get("/details/:id", subjectController.getSubjectById);
subjectRoute.get("/add", subjectController.addSubjectPage);
subjectRoute.post("/add", subjectController.addSubject);
subjectRoute.get("/delete/:id", subjectController.deleteSubject);
subjectRoute.get("/update/:id", subjectController.editSubjectPage);
subjectRoute.post("/update/:id", subjectController.editSubject);

module.exports = subjectRoute;
