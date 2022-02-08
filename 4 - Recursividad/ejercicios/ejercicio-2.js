const palindromeRecursion = (string = "") => {
    
    if (string.length <= 1) {
        return string[string.length - 1];
    } else {
        let newString = string[string.length - 1] + palindromeRecursion(string.substring(0, string.length - 1));

        if (string == newString) {
            return `${string} is a palindrome`;
        } else {
            return newString;
        }  
    }
}

const palindromeLoop = (string = "") => {
    let newString = "";

    for (i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    
    if (string == newString) {
        return `${string} is a palindrome`;
    } else {
        return `${string} is not a palindrome`;
    }
    
}

console.log(palindromeRecursion("DABALEARROZALAZORRAELABAD"));
console.log(palindromeLoop("DABALEARROZALAZORRAELABAD"));