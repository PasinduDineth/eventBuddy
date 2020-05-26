var Parse = require('parse');
Parse.initialize("CAPE", "0382299916C@pe");
Parse.serverURL = 'http://172.105.117.202:1337/parse'

async function signUp (params) {
    var user = new Parse.User();
    user.set("username", params.email);
    user.set("password", params.password);
    user.set("email", params.email);
    try {
      return {status: true, message: await user.signUp()}
    } catch (error) {
      return {status: false, message: error}
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
