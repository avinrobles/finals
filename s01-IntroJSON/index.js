//MODULE 11: INTRO TO JSON
/*Objectives:
    Learn how systems communicate with each other through the JS Object Notification.

Topics:
    -Introduction
    -Why JSOn
    -JSON Syntax
    -JSON in a File
    -JSON Functions Javascript

Javascript Object Notation (JSON)
    - Data format used by applications to store and transport data to one another.
    - Even though it has 'Javascript' in its name, the use of JSON is not limited to 
        JS-based applications and can also be used in other programming language.
    
        -- JSON is a string but formatted as JS Objects
        -- JSON is popularly used to pass data from one application to another
        -- JSON is not only in JS but also in other programming languages to pass data
        -- This is why it is specified as Javascript Object Notation
                --- There are JSON that are saved in a file with the extension called ".json"
                --- There is a way to turn JSON as JS Objects and JS Objects to JSON (vice versa).
    
    - JS Objects are not the same as JSON
        - JSON is a "String"
        - JS Object is an "Object"
        - JSON Keys are surrounded with double quotes ("")
            syntax of JSON:
                {
                    "key1": "value1",
                    "key2": "value2"
                }
*/


let sectionBCSArr = [
    {
        sectionName: "BCS101",
    },
    {
        sectionName: "BCS102"
    }
];
console.log(sectionBCSArr); //Run the code using node index.js
/* It will produce an outcome like this:
    [ { sectionName: "BCS101"}, { sectionName: "BCS102" } ]
*/


//For .JSON
let sectionBCSJSON = [
    {
        "sectionName": "BCS101",
    },
    {
        "sectionName": "BCS102"
    }
];
console.log(sectionBCSJSON); //Run the code again using node index.js
/* It will produce an outcome similar to sectionBCSArr
   To prevent that kind of output, use parse method.
*/


/*
    Converting JS Objects into JSON
        - This will allow us to convert/turn JS Objects into JSON
        - This is how we are going to manipulate our JSON
            -- by first turning our JS Objects into JSON, 
            we can also turn JSON back to JS Objects vice versa
                --- This is commonly used where trying to pass data
                from one application to another via the use of HTTP Request
                    ---- HTTP Requests are requests for resource between 
                    a server and client (browser)

                    - stringify()
                        -- JSON.stringify()
                            --- function used to convert a JS Object into JSON string.
                            --- It takes an object as input and returns a 
                            string representation of the object in JSON format
                    - parse()
                        -- JSON.parse()
                            --- this function is used to convert a JSON string 
                            into a JS Object.
                            --- Takes JSON string as input and return a 
                            JS Object created from a string
*/

//using stringify()
let batches = [ {batchName: "BCS22"}, {batchName: "BCS22"} ]
console.log(JSON.stringify(batches));
// The output should be: [{"batchName":"BCS22"},{"batchName":"BCS22"}]

//using parse()
const jsonString = '{"name": "Juan", "age": 30}';
console.log(JSON.parse(jsonString));
// The output should be: { name: 'Juan', age: 30 }


