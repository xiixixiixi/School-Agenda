const { Agenda } = require("../models");

class AgendaController {
    static getAgendas(req,res){
        //
        Agenda.findAll({
            order : [
            ['id', 'asc']
        ]
        })
            .then((agendas) => {
                res.render('agenda.ejs', {agendas});
                // res.json(agendas)
            })
            .catch((err) => {
                res.json(err);
            })
    }

    static getAgendaById(req,res){
        //
        const id = Number(req.params.id);
        Agenda.fundByPk(id)
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.json()
        })
    }

    static addAgendaPage(req,res) {
        res.render("addAgenda.ejs")
    }

    static addAgenda(req,res){
        //
        const {name, deadline, SubjectId, TeacherId} = req.body
        Agenda.create({
            name, deadline, SubjectId, TeacherId: false
        })
        .then(result => {
            res.redirect("/agendas")
        })
        .catch(err => {
            res.json(err)
        })
    }

    static deleteAgenda(req,res){
        //
        const id = +req.params.id
        Agenda.destroy({
            where: {id}
        })
        .then(result => {
            result 
            ? res.redirect('/agendas')
            : res.json({message: `id ${id} has not been removed` })
        })
    }

    static editAgendaPage(req, res){
        const id = +req.params.id;
        Agenda.findByPk(id)
        .then(agenda => {
            res.render('editAgenda.ejs', {agenda})
        })
        .catch(err => res.json(err))
    }

    static editAgenda(req,res){
        //
        const id = +req.params.id;
        const {name, deadline, SubjectId, TeacherId} = req.body;
        Agenda.update({
            name,deadline,SubjectId,TeacherId
        },{
            where: {id}
        })
        .then(result => {
            result[0]
            ? res.redirect('/agendas')
            : res.json({message: `id ${id} has not been edited`})
        })
        .catch((err)=> {
            res.json(err);
        });
    }
}

module.exports = AgendaController;