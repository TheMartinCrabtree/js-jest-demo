describe("Test Name", ()=>{
    test("Description of what is to be tested", ()=>{
        // array of test inputs
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        // expected output from the test
        const output = [
            { id: 3, url: "https://www.link3.dev" }
        ];

        // running the test function that accepts the inputs 
        // check to see if the input contains the word "link"
        // and evaluate if the result matches the expected output
        expect(filterByTerm(input, "link")).toEqual(output);
    });
});