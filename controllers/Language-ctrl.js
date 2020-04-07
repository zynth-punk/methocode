const ProgrammingLanguage = require('../models/Language-model')

createProgrammingLanguage = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a programming language',
        })
    }

    const progLanguage = new ProgrammingLanguage(body)

    if (!progLanguage) {
        return res.status(400).json({ success: false, error: err })
    }

    progLanguage
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: ProgrammingLanguage._id,
                message: 'Programming language created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Programming language not created!',
            })
        })
}

updateProgrammingLanguage = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    ProgrammingLanguage.findOne({ _id: req.params.id }, (err, progLanguage) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Programming language not found!',
            })
        }
        progLanguage.name = body.name
        progLanguage
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: progLanguage._id,
                    message: 'Programming language updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Programming language not updated!',
                })
            })
    })
}

deleteProgrammingLanguage = async (req, res) => {
    await ProgrammingLanguage.findOneAndDelete({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!progLanguage) {
            return res
                .status(404)
                .json({ success: false, error: `Programming language not found` })
        }

        return res.status(200).json({ success: true, data: ProgrammingLanguage })
    }).catch(err => console.log(err))
}

getProgrammingLanguageById = async (req, res) => {
    await ProgrammingLanguage.findOne({ _id: req.params.id }, (err, progLanguage) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!progLanguage) {
            return res
                .status(404)
                .json({ success: false, error: `Programming language not found` })
        }
        return res.status(200).json({ success: true, data: progLanguage })
    }).catch(err => console.log(err))
}

getProgrammingLanguage = async (req, res) => {
    await ProgrammingLanguage.find({}, (err, movies) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!progLanguage.length) {
            return res
                .status(404)
                .json({ success: false, error: `ProgrammingLanguage not found` })
        }
        return res.status(200).json({ success: true, data: progLanguage })
    }).catch(err => console.log(err))
}

module.exports = {
    createProgrammingLanguage,
    updateProgrammingLanguage,
    deleteProgrammingLanguage,
    getProgrammingLanguage,
    getProgrammingLanguageById,
}