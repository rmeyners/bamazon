var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bamazon'
});

connection.connect(function (error) {
    if (error) {
        console.error('connection error: ' + error.stack);
        return;
    }
    console.log("--------------");
    getData();
});

function getData() {
    connection.query("SELECT * FROM products", function (error, data) {
        if (error) throw error;
        userInput(data);
    });
}

function userInput(data) {
    var products = [];
    for (d in data) {
        products[d] = data[d].item_id + " | " + data[d].product_name + " | Price: $" + data[d].price + " | There are " + data[d].stock_quantity + " in stock";
    }
    inquirer.prompt([
        {
            type: "list",
            name: "productId",
            message: "What product would you like to buy?",
            choices: products,
        },
        {
            type: "input",
            name: "quantity",
            message: "How many product units would you like to buy?"
        }
    ]).then(function (userInput) {

        var product = userInput.productId.split(" :");
        var productId = product[0];

        connection.query("SELECT * FROM products WHERE ?",
            [{ item_id: productId }],
            function (error, data) {
                if (error) throw error;
                inStock(data, userInput.quantity);
            });
    });

    function inStock(data, quantity) {
        if (data[0].stock_quantity < quantity) {
            console.log("Insufficient Quantity!");
            connection.end();
        } else {
            updateDB(data, quantity);
            totalCost(data, quantity);
        }
    }

    function updateDB(data, quantity) {
        var quantity_left = data[0].stock_quantity - quantity;
        connection.query("UPDATE products SET ? WHERE ?",
            [
                { stock_quantity: quantity_left },
                { item_id: data[0].item_id }
            ],
            function (error, data) {
                if (error) throw error;
            });
    }

    function totalCost(data, quantity) {
        console.log("\n=============\n");
        console.log("Product : " + data[0].product_name);
        console.log("Price \t: " + data[0].price);
        console.log("Quantity :" + quantity + "\n");
        console.log("Total Cost: " + data[0].price * quantity)
        connection.end();
    }

}