function power(a, b) {
    return a ** b;
}

console.log(power(2, 3)); // 8


function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}

console.log(isLeapYear(2020)); // true


function calcS(a, b, c) {
    return (a + b + c) / 2;
}

function areaOfTriangle(a, b, c) {
    let S = calcS(a, b, c);
    let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}

console.log(areaOfTriangle(3, 4, 5));



function average(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}

function percentage(m1, m2, m3) {
    let total = m1 + m2 + m3;
    return (total / 300) * 100;
}

function mainFunction(m1, m2, m3) {
    let avg = average(m1, m2, m3);
    let per = percentage(m1, m2, m3);

    console.log("Average: " + avg);
    console.log("Percentage: " + per + "%");
}

mainFunction(80, 70, 90);



function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

console.log(customIndexOf("hello", "e")); // 1



function deleteVowels(sentence) {
    let result = "";
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < sentence.length; i++) {
        if (!vowels.includes(sentence[i])) {
            result += sentence[i];
        }
    }
    return result;
}

console.log(deleteVowels("Hello World"));



function countSuccessiveVowels(text) {
    let count = 0;

    for (let i = 0; i < text.length - 1; i++) {
        let c1 = text[i].toLowerCase();
        let c2 = text[i + 1].toLowerCase();

        switch (c1 + c2) {
            case "aa": case "ae": case "ai": case "ao": case "au":
            case "ea": case "ee": case "ei": case "eo": case "eu":
            case "ia": case "ie": case "ii": case "io": case "iu":
            case "oa": case "oe": case "oi": case "oo": case "ou":
            case "ua": case "ue": case "ui": case "uo": case "uu":
                count++;
                break;
        }
    }
    return count;
}

console.log(countSuccessiveVowels("Pleases read this application and give me gratuity"));



function toMeters(km) {
    return km * 1000;
}
function toFeet(km) {
    return km * 3280.84;
}
function toInches(km) {
    return km * 39370.1;
}
function toCentimeters(km) {
    return km * 100000;
}

console.log(toMeters(5));
console.log(toFeet(5));
console.log(toInches(5));
console.log(toCentimeters(5));




function overtime(hours) {
    if (hours > 40) {
        let extra = hours - 40;
        return extra * 12;
    }
    return 0;
}

console.log(overtime(45)); // 5 extra hours * 12 = 60


function notes(amount) {
    let hundreds = amount;
    let hundredNotes = hundreds;

    let fiftyNotes = Math.floor((hundreds * 100) / 50);
    let tenNotes = Math.floor((hundreds * 100) / 10);

    console.log("100 Notes: " + hundredNotes);
    console.log("50 Notes: " + fiftyNotes);
    console.log("10 Notes: " + tenNotes);
}

notes(5); // 500