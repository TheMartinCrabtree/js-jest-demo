function filterByTerm(inputArr, keyword){
    return inputArr.filter(function(inputElem){
        return inputElem.animal.match(keyword);
    });
}

describe("Cat Checker", ()=>{
    test("Check if input contains the word CAT", ()=>{
        // array of test inputs
        const input = [
            { id: 1, animal: "good dog" },
            { id: 2, animal: "good cat" },
            { id: 3, animal: "bad CAT" }
        ];

        // expected output from the test
        const output = [
            { id: 3, animal: "bad CAT" }
        ];

        // running the test function that accepts the inputs 
        // check to see if the input contains the word "link"
        // and evaluate if the result matches the expected output
        expect(filterByTerm(input, "CAT")).toEqual(output);
    });
});