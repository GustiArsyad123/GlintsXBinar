const { user } = require("../models"); // Import user in models
const encryption = require("../helpers/encryption"); // Import encrytion
const { generateToken } = require("../helpers/jwt"); // Import jwt webson token

// Create class sign in controller
class SignInController {
  // Make function sign in
  static async signIn(req, res, next) {
    try {
      //get the input of req.body
      const email = req.body.email;
      const password = req.body.password;

      //Get user by email
      const data = await user.findOne({
        where: { email: email },
      });
      console.log(data);
      // If user wrong input of email or password
      if (!data) {
        return res
          .status(400)
          .json({ statusCode: 401, message: "Email or password is wrong" });
      }

      let isPwdValid = encryption.isPwdValid(password, data.password);

      if (!isPwdValid) {
        return res
          .status(400)
          .json({ statusCode: 401, message: "Email or password is wrong" });
      }
      const { id, name } = data;

      const payload = {
        id,
        name,
        email,
      };

      const token = generateToken(payload);

      //   Send the token
      return res.status(200).json({ message: "login success", token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = SignInController;
