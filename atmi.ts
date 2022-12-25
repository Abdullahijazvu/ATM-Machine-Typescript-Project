#!/usr/bin/env node

import inquirer from "inquirer";


//Introducing Self Calling function//

(
    async () => {
        const usersinput: { userId: string, userPin: string } = await inquirer.prompt([
            {
                name: "userid",
                message: "enter your user id",
                type: "input"
            },
            {
                name: "userPin",
                message: "enter your Pin number",
                type: "password"
            }
        ])
        // console.log("User Id", usersinput.userId);
        // console.log("User Pin", usersinput.userPin);
        
        const userData = {
            userid: usersinput.userId,
            userPin: usersinput.userPin,
            amount: Math.floor(Math.random() * 10000 + 1)
        }
        console.log(userData);
        
        const selectedOpt: { options: "cash withdrawal" | "exit" } = await inquirer.prompt([
            {
                name: "options",
                message: "Select Any Option",
                type: "list",
                choices: ["cash withdrawal", "exit"]
            },

        ])
        if(selectedOpt.options === "cash withdrawal"){
            console.log("Your Current Amount: ", userData.amount) ;
            
            const enteredAmount: { amount: number} = await inquirer.prompt([
                {
                    message: "Enter your amount",
                    name: "amount",
                    type: "number",
                    validate: (i) => {
                        if(i > userData.amount){
                            return "Insufficient Balance"
                        } else {
                            return true
                        }
                    }
                }
            ])

            userData.amount -= enteredAmount.amount
            console.log("Amount after Withdrawal: ", userData.amount    );
        }
        
    }
)()