function SayFortune(jobTitle, geoLocation, partner, numKids) {
    var fortune = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(fortune);
}

SayFortune('Interior Designer', 'china', 'Charles', 2);
SayFortune('Accountant', 'USA', 'Lerbon Carlos', 3);
SayFortune('Singer', 'Laos', 'Liu', 0);