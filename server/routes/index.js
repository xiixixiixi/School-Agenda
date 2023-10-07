const route = require("express").Router();

route.get("/", (req, res) => {
  res.render('home.ejs')
});

const teacherRoutes = require("./teacher");
const subjectRoutes = require("./subject");
const agendaRoutes = require("./agenda");

route.use("/teachers", teacherRoutes);
route.use("/subjects", subjectRoutes);
route.use("/agendas", agendaRoutes);

module.exports = route;
