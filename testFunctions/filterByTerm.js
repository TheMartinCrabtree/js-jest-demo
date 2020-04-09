function filterByTerm(inputArr, keyword){
    // covering outliers and edge cases
    if(!inputArr)throw Error("No input or null input array provided");
    if(!keyword)throw Error("No keyword or empty keyword provided");

    // declare a regular expression that will
    // evaluate true for "i" = case-insensitive match
    const regex = new RegExp(keyword, "i");

    return inputArr.filter(function(inputElem){
        return inputElem.animal.match(regex);
    });
}


module.exports = filterByTerm;