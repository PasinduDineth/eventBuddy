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
async function addProduct (params) {
  const Product = Parse.Object.extend("Product");
  const product = new Product();
  product.set("productName", "ddd");
  product.set("Price", 1111);
  product.set("description", "des des des");
  product.set("owner", "pasindu");
  product.set("category", "category");
  try {
    product.save()
    .then((product) => {
      alert('New object created with objectId: ' + product.id);
    }, (error) => {
      alert('Failed to create new object, with error code: ' + error.message);
    });

  } catch (error) {
    return error
  }
}
export {signUp, signIn, addProduct}
