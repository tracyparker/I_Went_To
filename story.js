var swPFplace = prompt('Name a SW or PF place. (A planet or location.)');
var sentence = "<h2>I went to  " + swPFplace;
var vehicle = prompt('Name a SW or PF vehicle.');
var thing = prompt('Name a thing. (Gun, Light Saber, robot, etc.)');
var tooMuch= prompt('Something you can have too much of. (Food, beer,etc.)');
var character = prompt('Name a Star Wars or Pulp Fiction character.');
var feeling = prompt('Name a feeling');
var anotherVerb = prompt('Name another verb.');
var anotherThing = prompt('Name another thing. (Gun, Light Saber, robot, etc.)');
var StarWarsCharacter = prompt('Name a Star Wars character.');
alert('All done. Ready for the message?');
sentence += ' once. We raced ' + vehicle + "'s";
sentence += ' and I lost my ' + thing + '.';
sentence += ' We had too much ' + tooMuch + ' and ended up calling ' + character + ' for help.';
sentence += ' I never felt so ' + feeling + '.';
sentence += ' So I started ' + anotherVerb + ',' + ' and my ' + anotherThing + ' exploded!';
sentence += ' Just goes to show that you should never let ' + StarWarsCharacter + ' do the driving!</h2>'; 
document.write(sentence);





//Original code from .js file used in lesson//

// var adjective = prompt("Please list an adjective.");
// var sentence = "<h2>There once was a " + adjective;
// var verb = prompt("Please list a verb.");
// var noun = prompt("Please list a noun.");
// alert('All done. Ready for message?');
// sentence += ' programmer who wanted to use JavaScript to ' + verb;
// sentence += ' the ' + noun + '</h2>';
// document.write(sentence);