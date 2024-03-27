import config from "../config/auth.config.mjs"
import db from "../db/conn.mjs"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import User from "../db/userSchema/userSchema.mjs"

const encryptPassword = (password) => {
    return bcrypt.hashSync(password)
}

const getSignUpDataFromReq = (req) => {
    const userName = req.body.userName
    const email = req.body.email
    const password = req.body.password
    const fpoName = req.body.fpoName
    return { userName, email, password, fpoName }
}
const signUp = async (req, res, next) => {

    try {
        const { userName, email, password, fpoName } = getSignUpDataFromReq(req)

        const newUser = new User({
            userName: userName,
            email: email,
            password: encryptPassword(password),
            fpoName: fpoName
        })

        const savedUser = await newUser.save()

        res.status(201).json(savedUser)
    } catch (error) {
        console.error("Error adding user:", error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}

const checkPasswordValidity = (req, correctPassword) => {
    var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        correctPassword
    )
    return passwordIsValid
   }

const createToken = (user) => {
    const Token = jwt.sign({ id: user.id },
        config.secret,
        {
            algorithm: 'HS256',
            allowInsecureKeySizes: true,
            expiresIn: 86400, // 24 hours
        })
    return Token
}



const signIn = async (req, res) => {
    try {
        const userFound = await User.findOne({ userName: req.body.userName })
        if (!userFound) {
            return res.status(404).send({ message: "User not found" })
        }

        var passwordValid = checkPasswordValidity(req, userFound.password)

        if (!passwordValid) {
            return res.status(401).send({ accessToken: null, message: "Incorrect Password" })
        }


        const Token = createToken(userFound)

        res.status(200).send({
            id: userFound._id,
            userFoundname: userFound.userName,
            email: userFound.email,
            accessToken: Token
        })
    } catch (err) {
        res.status(500).send({ message: "Internal server error, unable to signin" })

    }
}

export default { signIn, signUp }
