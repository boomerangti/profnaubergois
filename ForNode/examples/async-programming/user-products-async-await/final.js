async function getUserProducts(OptionsJSON) {
  try {
    const options = JSON.parse(OptionsJSON);
    const user = await logIn("username", "password");
    const orders = await getOrders(user);
    const products = [];

    const getProductPromises = [];
    orders.forEach(order => {
        getProductPromises.push(getProduct(order.id));
    });

    return await Promise.all(getProductPromises);
  } catch (error) {
    console.log(error);
  }
}


























function getProduct(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Macbook Pro"
      });
    }, 100);
  });
}

function getTranslatedProduct(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Macbook Pro"
      });
    }, 100);
  });
}



function getOrders(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1
        },
        {
          id: 2
        }
      ]);
    }, 100);
  });
}

function logIn(user, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        username: "Ryan"
      });
    }, 100);
  });
}


function getProductPromise(orderId, method) {
  return new Promise((resolve, reejct) => {
    return method.bind(orderId);
  });
}

getUserProducts(`{"Translate":"true"}`).then(products => {
  console.log(`Products: ${JSON.stringify(products)}`);
});
