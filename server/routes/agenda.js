const agendaRoute = require("express").Router()
const AgendaController = require("../controllers/AgendaControllers");

agendaRoute.get("/", AgendaController.getAgendas);
agendaRoute.get("/details/:id", AgendaController.getAgendaById);
agendaRoute.get("/add", AgendaController.addAgendaPage);
agendaRoute.post("/add", AgendaController.addAgenda);
agendaRoute.get("/delete/:id", AgendaController.deleteAgenda);
agendaRoute.get("/update/:id", AgendaController.editAgendaPage);
agendaRoute.post("/update/:id", AgendaController.editAgenda);

module.exports = agendaRoute;
