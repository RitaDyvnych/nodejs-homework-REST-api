import { Router } from 'express'
import { signUp, login, logout } from '../../../controllers/auth'


const router = new Router()


// router.post('/signup', createValidate, signUp)
router.post('/signup', signUp)
router.post('/login', login)
router.post('/logout', logout)
// router.post('/current', addContact)

export default router
