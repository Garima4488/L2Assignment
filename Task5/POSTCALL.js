var assert = require('assert');
const request = require('request');

var myJSONObject = {title : 'foo1',
                    body : 'bar',
                    userId : 1 };
request({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "POST",
    json: true,   // <--Very important!!!
    body: myJSONObject},
   function (error, response, body){
    try {
    //Asserting status code
    assert.strictEqual(response.statusCode, 201);
    console.log(response.statusCode);
    // Asserting Id
    assert.strictEqual(body.id, 101);
    console.log(body.id);
    console.log('TC passed');
    } catch (error) {
    assert.strictEqual(error.message, 'TC failed');
    }
});
