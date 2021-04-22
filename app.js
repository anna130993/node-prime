const fs = require('fs');

const genders = ['female', 'male'];
const femaleFirstNames = ['Amelia', 'Meredith', 'Cristina', 'Helen', 'Maggie', 'Lauren', 'April', 'Callie', 'Arizona', 'Lexie', 'Miranda'];
const maleFirstNames = ['Derek', 'Andrew', 'Atticus', 'Max', 'Conrad', 'Connor', 'Jackson', 'Alex', 'Will', 'Mark'];
const lastNames = ['Shepherd', 'Grey', 'Goodwin', 'Lincoln', 'DeLuca', 'Sharpe', 'Bloom', 'Rhodes', 'Hawkins', 'Halstead', 'Robbins', 'Sloan', 'Torres', 'Yang', 'Karev', 'Sexton', 'Lockwood', 'Bailey', 'Castillo'];
const people = [];

const randChoice = arr => arr[Math.floor(Math.random() * arr.length)];

for (let i = 0; i < 20; i++) {
    const gender = randChoice(genders);
    const firstName = gender === 'female'
    ? randChoice(femaleFirstNames)
    : randChoice(maleFirstNames);
    const lastName = randChoice(lastNames);
    //const fullName = `${firstName} ${lastName}`;
    const age = Math.floor(Math.random() * 60) + 18;
    
    const number1 = Math.floor(Math.random() * 900) + 100;
    const number2 = Math.floor(Math.random() * 900) + 100;
    const number3 = Math.floor(Math.random() * 900) + 100;
    const phone = `${number1}-${number2}-${number3}`;
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;

    people.push({gender, firstName, lastName, age, phone, email});
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
    if (err) console.log('Something went wrong!');
    console.log('File has been succesfully generated! Check people.json');
});

