// Sample Tests:
/*calculateAge(2012, 2016); // "You are 4 years old."
calculateAge(1989, 2016); // "You are 27 years old.");
calculateAge(2000, 2090); // "You are 90 years old.");
calculateAge(2000, 1990); // "You will be born in 10 years.");
calculateAge(3400, 3400); // "You were born this very year!");
calculateAge(900, 2900); // "You are 2000 years old.");
calculateAge(2010, 1990); // "You will be born in 20 years.");
calculateAge(2010, 1500); // "You will be born in 510 years.");
calculateAge(2011, 2012); // "You are 1 year old.");
calculateAge(2000, 1999); // "You will be born in 1 year.");*/



// SOLUTIONS:
function calculateAge(born, now) {
    if (born === now) {
        return "You were born this very year!"
    }
    return now - born > 0 ? now - born === 1 ? `You are ${now - born} year old.` : `You are ${now - born} years old.` : born - now === 1 ? `You will be born in ${born - now} year.` : `You will be born in ${born - now} years.`;
}

function calculateAge2(born, now) {
    if (born === now) {
        return "You were born this very year!"
    }
    if (now > born) {
        return now - born === 1 ? `You are ${now - born} year old.` : `You are ${now - born} years old.`
    } else {
        return born - now === 1 ? `You will be born in ${born - now} year.` : `You will be born in ${born - now} years.`
    }
}