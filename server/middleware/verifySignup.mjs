import db from "../db/conn.mjs"
const User = db.User

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    try {
        const UserExists = await User.findOne({
            userName: req.body.userNname
        })
        if (UserExists) {
            res.status(500).send({ message: err })
            return
        }
        const EmailDuplicate =await User.findOne({
            email: req.body.email
        })
        if (EmailDuplicate) {
            res.status(500).send({ message: "email already exists" })
            return
        }
        next()
    } catch (error) {
        res.status(500).send({ message: "error while checking validity of username and email" })
    }
}

const verifySignUp = {
    checkDuplicateUsernameOrEmail
}

export default verifySignUp

