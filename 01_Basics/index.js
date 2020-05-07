// NOTE always keep the javascript code external to HTML page.
function submitData() {
  let text = prompt();
  alert(text);
}

function readFromDatabase() {
  let names = ["HTML", "JS", "CSS", "BootStrap"];
   for (let index = 0; index < names.length; index++) {
     const element = names[index];
     document.writeln("<br>"+element);
   }
   
}

// Console are for the data that will print on console level..
console.log("This line will print on developer console");

document.writeln("This will disaply in HTML page");
