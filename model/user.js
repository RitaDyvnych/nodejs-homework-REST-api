import pkg from 'mongoose'
import bcrypt from 'bcryptjs'
const { Schema, model } = pkg

const userSchema = new Schema(  {
    name: {
      type: String,
      default: "Guest",
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      validate(value) {
        const re = /\S+@\S+\.\S+/
        return re.test(String(value).trim().toLowerCase())
      }
    },
     password: {
      type: String,
      required: [true, 'Password is required'],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter"
    },
    token: {
      type: String,
      default: null,
    },
},
{
    versionKey: false,
  })

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(6)
    this.password = await bcrypt.hash(this.password, salt)
  }
  next()
})


const User = model('user', userSchema)
export default User