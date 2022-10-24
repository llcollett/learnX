// get words from urlsearch
const words = new URLSearchParams(window.location.search);

// get all inputs
const name1 = words.get('name-1');
const answer = words.get('answer');
const age = words.get('age');
const skills = words.getAll('skills');
const niceThing = words.get('nice-thing');

// manipulate inputs
const answerResult = answer === 'yes' ? "Cool that you want" : "Absolutely fine that you don't want";
const ageResult = age < 18 ? "Childrens lessons are 30 minutes long" : "Adults lessons are 1 hour";
const ageAttend = answer === 'yes' ? `I see you are ${age} years old, and that is fantastic. ${ageResult}, so I hope that works for you.` : "";
const responseAttend = answer === 'yes' ? "I look forward to hearing about it." : "Why don't you reconsider lessons and tell me about it?";

// result text
const resultText = `<p>Hi ${name1}, really nice to meet you. I can assure you, learning ${skills} is really fun.</p>

<p>${answerResult} lessons with me. ${ageAttend}</p>

<p>Super great about "${niceThing}". ${responseAttend}</p>`;

// reinput button
const reinput = `I have changed my mind, may I reinput?`;

// edit DOM with strings
document.getElementById('result').innerHTML = resultText;
document.getElementById('reinput').innerHTML = reinput;