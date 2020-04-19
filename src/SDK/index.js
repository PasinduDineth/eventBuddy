var Parse = require('parse');
Parse.initialize("APPLICATION_ID", "MASTER_KEY");
Parse.serverURL = 'http://localhost:1337/parse'

async function signUp (params) {
    var user = new Parse.User();
    user.set("username", "my name");
    user.set("password", "my pass");
    user.set("email", "email@example.com");
    console.log("params", params);
    try {
      await user.signUp();
      return "Doooone"
    } catch (error) {
      return error.message
    }
  }
async function signIn (params) {
  try {
    return await Parse.User.logIn(params.username, params.password);
  } catch (error) {
    return error
  }
}
export {signUp, signIn}
