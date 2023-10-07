const { Subject } = require("../models");

class SubjectController {
    static getSubjects(req,res){
        //
        Subject.findAll({
            order : [
            ['id', 'asc']
        ]
        })
            .then((subjects) => {
                res.render('subject.ejs', {subjects});
            })
            .catch((err) => {
                res.json(err);
            })
    }

    static getSubjectById(req,res){
        //
        const id = Number(req.params.id);
        Subject.fundByPk(id)
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.json()
        })
    }

    static addSubjectPage(req,res) {
        res.render("addSubject.ejs")
    }

    static addSubject(req,res){
        //
        const {name, schedule} = req.body
        Subject.create({
            name, schedule: false
        })
        .then(result => {
            res.redirect("/subjects")
        })
        .catch(err => {
            res.json(err)
        })
    }

    static deleteSubject(req,res){
        //
        const id = +req.params.id
        Subject.destroy({
            where: {id}
        })
        .then(result => {
            result 
            ? res.redirect('/subjects')
            : res.json({message: `id ${id} has not been removed` })
        })
    }

    static editSubjectPage(req, res){
        const id = +req.params.id;
        Subject.findByPk(id)
        .then(subject => {
            res.render('editSubject.ejs', {subject})
        })
        .catch(err => res.json(err))
    }

    static editSubject(req,res){
        //
        const id = +req.params.id;
        const {name, schedule} = req.body;
        Subject.update({
            name,schedule
        },{
            where: {id}
        })
        .then(result => {
            result[0]
            ? res.redirect('/subjects')
            : res.json({message: `id ${id} has not been edited`})
        })
        .catch((err)=> {
            res.json(err);
        });
    }
}

module.exports = SubjectController;