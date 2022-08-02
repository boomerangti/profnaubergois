function getUserProducts(OptionsJSON, callback) {
  login("user", "password", (err, result) => {
    if(err != null){
      //error handling
    }

    getOrders(result.username, (err, orders) => {
      if(err != null){
        //error handling
      }
      
      orders.forEach(order => {
        if (options.translate) {
          getTranslatedProduct(order.id, (error, product) => {
            if (error) {
              return callback(error, null);
            }
            count++;
            result.push(product.name);
            if (count === orders.length) callback(null, result);
          });
        } else {
          getProduct(order.id, (error, product) => {
            if (error) {
              return callback(error, null);
            }
            count++;
            result.push(product.name);
            if (count === orders.length) callback(null, result);
          });
        }
      });
    })

  })
}













function getProduct(orderId, callback) {
  setTimeout(() => {
    callback(null, {
      name: "Macbook Pro"
    });
  }, 100);
}

function getTranslatedProduct(orderId, callback) {
  setTimeout(() => {
    callback(null, {
      name: "Macbook Pro"
    });
  }, 100);
}

function getOrders(username, callback) {
  setTimeout(() => {
    callback(null, [
      {
        id: 1
      },
      {
        id: 2
      }
    ]);
  }, 100);
}

function logIn(user, password, callback) {
  setTimeout(() => {
    callback(null, {
      username: "Ryan"
    });
  }, 100);
}

getUserProducts(`{"Translate":"true"}`, (error, products) => {
  console.log(products);
});
