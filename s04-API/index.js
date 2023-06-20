//Loading the expressjs module into our app and into the express variable
//Express module will allow us to use expressjs methods to create our API
const express = require('express');

//create an application with express.js
//this creates an expressjs application and stores it as app
//app is our server
const app = express();

const port = 4000;

/*express.json() allows us to handle the request's body and 
automatically parse the incoming JSON to a JS object we can access and manage
*/
app.use(express.json());

let users = [
    {
        email: "mcdelossantos@gmail.com",
        username: "dalagangFilipina",
        password: "mcfilipinas",
        isAdmin: false
    },
    {
        email: "crisostomoibarra@gmail.com",
        username: "agila",
        password: "agila123",
        isAdmin: false
    },
    {
    email: "generic@gmail.com",
    username: "lmaolol",
    password: "jollibbeee",
    isAdmin: false
    }
];

let items = [];
let loggedUser;

//express has methods to use as routes corresponding to http method
//get(<endpoint>, <functionToHandle request and response>)

app.get('/', (req, res) =>{
        // once the rouce accesses, we can send a response with the use of res.send()
        //res.send() actuallly combines writeHead() & end() already
        //It is used to send a response to the client and is the end of the response
        res.send('Hello World')
});

app.get('/Robles', (req, res) => {
    res.send('Mabuhay! Philippines.')
});

app.post('/users', (req, res) => {
console.log(req.body);
//simulate the creaton of a new user account
    let newUser = {
        email: req.body.email,
        username: req.body.email,
        password: req.body.password,
        isAdmin: req.body.isAdmin
    };
    users,push(newUser);
    console,log(users);

    res,send('/Registered Successfully')
})

//login
app.post('/users/login', (req, res) => {
    //should contain username and password
    console.log(req.body);

    //find the user with the same username and password from our request body
    let foundUser = users.find((user) => {
        return user.username === req.body.username && user.password === req.body.password;
    });

    if(foundUser !== undefined){
        //get the index number foundUser, but since the users array is an array of object wehave to use findIndex().
        // It will iterate over all of the items and return the index number of the current item that matches the return condition. It is similar to find() but instead it returns only the ondex number
        let foundUserIndex = usersfindIndex((user) => {
            return user.username === foundUser.username
        }); //This will add the idnex of your found user in the foundUser object
        foundUser.index = foundUserIndex;
        // Temporarily log our user in. Allow us to refer the details of a logged in user
        loggedUser = foundUser
        console.log(loggedUser);

        res.send('Thank you for logging in.');
    } else {
        loggedUser = foundUser;
        res.send('Login failed. Wrong credentials.');
        }
});

//add items
app.post('/items', (re, res) => {
    console.log(loggedUser);
    console.log(req.body);

    if(loggedUser.isAdmin === true){
        let newItem = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            isActive: req.body.isActive
        };
        items.push(newItem);
        console.log(items);

        res.send('You have added a new item.');
    } else {
        res.send('Unauthorized. Action Forbidden');
    }
});

//get all item
app.get('/items', (req, res) => {
    console.log(loggedUser);
    if(loggedUser.isAdmin === true){
        res.send(items);
    } else {
        res.send('Unauthorized. Action Forbidden');
    }
})

//Simulate on getting the specific item
app.get('/items/:index', (req, res) => {
    console.log(req.params);
    console.log(req.params.index);
    let index = parseInt(req.params.index);
    let item = items[index]
    res.send(item)
})

//simulate change
app.put('/items/archive/:index', (req, res) => {
    console.log(req.params);
    console.log(req.params.index);
    let itemIndex = parseInt(req.params.index);
    if(loggedUser.isAdmin === true){
        items[itemIndex].isActive = false;
        console.log(items[itemIndex]);
        res.send('Item Archived.')
    } else {
        res.send('Unauthorized. Action Forbidden');
    }
})

app.listen(port, () => console.log(`Server is running at port ${port}`));