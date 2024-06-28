#! /usr/bin/env node
//importing inquirer
console.log("\n\twellcome to\'codewithshamsasssaleem\'-mycli--calculator");
import inquirer from "inquirer";
let loop = true;
while (loop) {
    const userInput = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "Enter First Number"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Second Number"
        },
        {
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", , "Division"],
            message: "Select the Operator"
        },
    ]);
    const num1 = userInput.num1;
    const num2 = userInput.num2;
    const operator = userInput.operator;
    console.log(num1, num2, operator);
    // now we use some condition here
    if (num1 && num2) {
        if (operator === "Addition") {
            console.log(`\nthe answer of ${num1}+ ${num2}=${num1 + num2} `);
        }
        else if (operator === "Subtraction") {
            console.log(`\nthe answer of ${num1}- ${num2}=${num1 - num2} `);
        }
        else if (operator === "Multiplication") {
            console.log(`\nthe answer of ${num1}* ${num2}=${num1 * num2} `);
        }
        else if (operator === "Division") {
            console.log(`\nthe answer of ${num1}/ ${num2}=${num1 / num2} `);
        }
    }
    else {
        console.log(`Please Enter a Valid Number`);
    }
    const calculateMore = await inquirer.prompt({
        type: "confirm",
        name: "more",
        message: "Do you want more caculations?",
        default: false //if user do not press say yes or no
    });
    if (!calculateMore.more) {
        loop = false;
        console.log(`\nThank you for watching this video! `);
    }
}
// for some advance features watch the  video
// extra features include if users want more than one calculations at same time 
