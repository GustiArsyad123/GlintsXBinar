const bcrypt = require("bcrypt"); //Import bcrypt
require("dotenv").config(); //Import env

//Make class of encryption
class Encryption {
  // Function encryption
  static encryptPassword(rawPwd) {
    const saltRounds = parseInt(process.env.SALT_ROUNDS);
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(rawPwd, salt);
    return hash;
  }

  //Function decryption
  static isPwdValid(rawPwd, hashedPass) {
    return bcrypt.compareSync(rawPwd, hashedPass);
  }
}

module.exports = Encryption;
