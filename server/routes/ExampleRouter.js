const { Router } = require('express')
const ExampleController = require('../controller/ExampleController')

const router = Router()

// aqui vai as requisições
router.get("/", ExampleController.getAllExamples)
router.get("/user", ExampleController.getUser)


module.exports = router