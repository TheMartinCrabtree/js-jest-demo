
const filterByTerm = require("../testFunctions/filterByTerm");

describe("Cat Checker", ()=>{
    test("Check if input contains the word CAT", ()=>{
        // array of test inputs
        const input = [
            { id: 1, animal: "good dog" },
            { id: 2, animal: "good DOG" },
            { id: 3, animal: "bad CAT" }
        ];


        // expected output from the test
        const output = [
            { id: 3, animal: "bad CAT" }
        ];

        // running the test function that accepts the inputs 
        // check to see if the input contains the word "CAT"
        // and evaluate if the result matches the expected output
        expect(filterByTerm(input, "cat")).toEqual(output);
    });
});



