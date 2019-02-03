var fs = require("fs");

// Reading JSON file
var content = fs.readFileSync("data.json", "utf-8");
console.log(content);
var object = JSON.parse(content);

// Changing the values
object.CompanyName = "Wipro LTD";
object.EmployeeName = "Garima Jain";

// Writing new JSON to new file
var newFile = JSON.stringify(object, null, 1);
fs.writeFileSync("editedData.json", newFile, "utf-8");

console.log(newFile);
