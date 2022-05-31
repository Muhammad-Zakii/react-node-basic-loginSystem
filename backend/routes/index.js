var express = require('express')

var router = express.Router()

var users = [
  {
    email: 'abc@gmail.com',
    password: '12345',
  },
]

router.use('/logincheck', async (req, res) => {
  let resul = users.map(await ((user) => user.email == req.body.email))
  if (resul) {
    if (resul.password == req.body.password) {
      res.status(200).send({
        message: 'Login successfully.',
      })
    } else {
      res.status(403).send({
        message: 'Password incorrect.',
      })
    }
  } else {
    res.status(404).send({
      message: 'User not found.',
    })
  }
})
router.get('/', (req, res) => {
  res.send('Hello to the backend server.')
})

module.exports = router
