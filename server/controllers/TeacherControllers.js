const { Teacher } = require("../models");

class TeacherController {
    static getTeachers(req,res){
        //
        Teacher.findAll({
            order : [
            ['id', 'asc']
        ]
        })
            .then((teachers) => {
                res.render('teacher.ejs', {teachers});
            })
            .catch((err) => {
                res.json(err);
            })
    }

    static getTeacherById(req,res){
        //
        const id = Number(req.params.id);
        Teacher.fundByPk(id)
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            res.json()
        })
    }

    static addTeacherPage(req,res) {
        res.render("addTeacher.ejs")
    }

    static addTeacher(req,res){
        //
        const {name} = req.body
        Teacher.create({
            name :false
        })
        .then(result => {
            res.redirect("/teachers")
        })
        .catch(err => {
            res.json(err)
        })
    }

    static deleteTeacher(req,res){
        //
        const id = +req.params.id
        Teacher.destroy({
            where: {id}
        })
        .then(result => {
            result 
            ? res.redirect('/teachers')
            : res.json({message: `id ${id} has not been removed` })
        })
    }

    static editTeacherPage(req, res){
        const id = +req.params.id;
        Teacher.findByPk(id)
        .then(teacher => {
            res.render('editTeacher.ejs', {teacher})
        })
        .catch(err => res.json(err))
    }

    static editTeacher(req,res){
        //
        const id = +req.params.id;
        const {name} = req.body;
        Teacher.update({
            name
        },{
            where: {id}
        })
        .then(result => {
            result[0]
            ? res.redirect('/teachers')
            : res.json({message: `id ${id} has not been edited`})
        })
        .catch((err)=> {
            res.json(err);
        });
    }
}

module.exports = TeacherController;