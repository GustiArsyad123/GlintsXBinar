const { decodeToken } = require("../../helpers/jwt"); //Import decode token

// Make validator authentication
class Auth {
  static isSignedIn(req, res, next) {
    // req.headers.token NOte: if want to input token via headers custom
    // input via authorization
    if (!req.headers.token) {
      return res.status(401).json({
        statusCode: 401,
        message: "Please sign the first",
      });
    }
    //   Save token to userData
    let token = req.headers.token;
    console.log(token);
    let userData = decodeToken(token);
    req.userData = userData;

    next();
  }
}

module.exports = Auth;
