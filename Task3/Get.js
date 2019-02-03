var assert = require('assert');
const request = require('request');
request('https://jsonplaceholder.typicode.com/posts/1', function (error, response, body) {

        try {
    console.log(response.statusCode)

      //Asserting status code
    assert.strictEqual(response.statusCode, 200);
    console.log(response.statusCode)
    // Asserting userId
	var jsonParsed = JSON.parse(body);
    console.log(jsonParsed.userId);
    assert.strictEqual(jsonParsed.userId, 1);
    console.log('TC passed');
    } catch (error) {
      assert.strictEqual(error.message, 'TC failed');
    }
});
