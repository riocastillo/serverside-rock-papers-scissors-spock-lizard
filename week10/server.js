const http = require('http'); //an object that gives access to network
const fs = require('fs'); //gives access to files on harddrive
const url = require('url');
const querystring = require('querystring'); // enables us to look at the qeury parameters on our url

http.createServer(function (req, res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query); // using query parameters
    //passing in an argument to the createserver (the function is the argument) that says
    //every time someone hits this API then this function will run


    if (page == '/') { //loading project if you hit the server and request the main page
        fs.readFile('index.html', function (err, data) { //reading the file + responds
            res.writeHead(200, { 'Content-Type': 'text/html' }); //200 means everything is ok (like the response and the sever status)
            res.write(data); // data is a long string that contains every text in your html
            res.end(); //we're ending the respond so the server knows its time to spit data back to browser
        });
    }
    else if (page == '/api') { //for the fetch call

        if ('computer' in params & 'user' in params) {
            let answer = compareChoices(params['user'], params['computer'])
            console.log('answer:' + answer)

            res.writeHead(200, { 'Content-Type': 'application/json' })
            const objToJson = {
                result: answer
            }
            res.end(JSON.stringify(objToJson)) // passing a string thru res.end tells the server to add the string before ending
        }
    }
    else if (page == '/main.js') {
        fs.readFile('main.js', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' })
            res.write(data) // all the javascript will be returned
            res.end()
        })
    }
    else if (page == '/style.css') {
        fs.readFile('style.css', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/css' })
            res.write(data)
            res.end()
        })
    }
    else if (page == "/setRock.png") {
        fs.readFile("setRock.png", function (err, data) {
            res.writeHead(200, { "Content-Type": "image/jpg" })
            res.write(data);
            res.end();
        })
    }
    else if (page == "/setLizard.png") {
        fs.readFile("setLizard.png", function (err, data) {
            res.writeHead(200, { "Content-Type": "image/jpg" })
            res.write(data);
            res.end();
        })
    }
    else if (page == "/setPaper.png") {
        fs.readFile("setPaper.png", function (err, data) {
            res.writeHead(200, { "Content-Type": "image/jpg" })
            res.write(data);
            res.end();
        })
    }
    else if (page == "/setScissors.png") {
        fs.readFile("setScissors.png", function (err, data) {
            res.writeHead(200, { "Content-Type": "image/jpg" })
            res.write(data);
            res.end();
        })
    }
    else if (page == "/setSpock.png") {
        fs.readFile("setSpock.png", function (err, data) {
            res.writeHead(200, { "Content-Type": "image/jpg" })
            res.write(data);
            res.end();
        })
    }
}).listen(8003)

function compareChoices(choice1, choice2) {
    if (choice1 === choice2) {
        return 0
    }
    else if (choice1 === 'spock') {
        if ((choice2 === 'rock') || (choice2 === 'scissors')) {
            console.log('choice 1 wins')
            return 1
        }
        else {
            console.log('choice 2 wins')
            return -1
        }
    }
    else if (choice1 === 'lizard') {
        if ((choice2 === 'paper') || (choice2 === 'spock')) {
            console.log('choice 1 wins')
            return 1
        }
        else {
            console.log('choice 2 wins')
            return -1
        }
    }
    else if (choice1 === 'rock') {
        if ((choice2 === 'scissors') || (choice2 === 'lizard')) {
            console.log('choice 1 wins')
            return 1
        }
        else {
            console.log('choice 2 wins')
            return -1
        }
    }
    else if (choice1 === 'paper') {
        if ((choice2 === 'rock') || (choice2 === 'spock')) {
            console.log('choice 1 wins')
            return 1
        }
        else {
            console.log('choice 2 wins')
            return -1
        }
    }
    else if (choice1 === 'scissors') {
        if ((choice2 === 'paper') || (choice2 === 'lizard')) {
            console.log('choice 1 wins')
            return 1
        }
        else {
            console.log('choice 2 wins')
            return -1
        }
    }
    // createReset()
}

// function createReset() {
//     const newButton = document.createElement('button')
//     newButton.innerText = "try again"
//     document.querySelector('a').appendChild(newButton)
// }


// return 1 if choice 1 beats choice 2 
// return -1 if choice 2 beats choice 1 
// return 0 if they're tied

//could also solve this problem using arrays
//look at switchcase as an alternative way to handle this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
//try again with switch case