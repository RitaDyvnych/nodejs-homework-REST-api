import repositoryContacts from '../../repository/contacts'
import { HttpCode } from '../../libs/constants'
import AuthService from '../../service/auth'

const authService = new AuthService()

const signUp = async (req, res, next) => {
  const { email } = req.body
  const isUserExist = await authService.isUserExist(email)
  if (isUserExist) {
    return res
    .status(HttpCode.CONFLICT)
      .json({
        status: 'error',
        code: HttpCode.CONFLICT,
        message: 'Email is already exist'
      })
  }
  const data = await authService.create(req.body) 
  return res
    .status(HttpCode.OK)
    .json({ status: 'success', code: HttpCode.OK, data })
}

const login = async (req, res, next) => {
  
  return res
    .status(HttpCode.OK)
    .json({ status: 'success', code: HttpCode.OK, data: {} })
}

const logout = async (req, res, next) => {
  
  return res
    .status(HttpCode.OK)
    .json({ status: 'success', code: HttpCode.OK, data: {} })
}

export {signUp, login, logout}