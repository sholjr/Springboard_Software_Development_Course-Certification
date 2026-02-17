const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

//Step 1

let start = "";

if (emblemClue1 === "Eagle") {
    start = "Forum"
}
else if (emblemClue1 === "Lion") {
    start = "Colosseum"
}
else {
    start = "villa"
}

//Step 2

if (emblemClue2 === "Laurel" && emblemClue2 === "Forum") {
    start += "of Augustus"
}

if (emblemClue2 === "Grapes" || emblemClue1 === "Villa") {
    start += "of Pompey"
}

//Step 3

switch (emblemClue3) {
    case 7:
        start += "North";
        break;
    case 3:
        start += "South";
        break;
    case 9:
        start += "East"; 
        break;
    case 4:
        start += "West";
        break;
}

/* Question 

    It's better to use "===" over "==" because you want to find the Strict equality of your value to ensure that your result will actually be true and will not change when "==" checks the Value (not the type of value)
    "===" Checks both the type and the value and doesn't normally lead to unexpected results*/

    