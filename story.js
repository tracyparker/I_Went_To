var state = prompt('Name a state.');
var sentence = "<h2>I went to  " + state;
var fruit = prompt('Name a fruit.');
var noun = prompt('Name a noun.');
var place = prompt('Name a place.');
var thing = prompt('Name a thing.');
var feeling = prompt('Name a feeling');
var anotherVerb = prompt('Name another verb.');
var anotherThing = prompt('Name another thing.');
var StarWarsCharacter = prompt('Name a Star Wars character.');
alert('All done. Ready for the message?');
sentence += ' once. I ate a lot of ' + fruit;
sentence += '. I got sick and threw up on the ' + noun + '.';
sentence += ' I was rushed to the ' + place + ' and they tightened my ' + thing + '.';
sentence += ' I never felt so ' + feeling + '.';
sentence += ' So I started ' + anotherVerb + ',' + ' and my ' + anotherThing + ' fell off!';
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