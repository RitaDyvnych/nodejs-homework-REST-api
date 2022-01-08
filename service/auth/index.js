import Users from '../../repository/users'

class AuthService {
  async isUserExist(email) {
    const user = await Users.findByEmail(email)
    return !!user 
  }

  async create(body) {
    const {email, subscription} = await Users.create(body)
    return {email, subscription}
  }
}

export default AuthService