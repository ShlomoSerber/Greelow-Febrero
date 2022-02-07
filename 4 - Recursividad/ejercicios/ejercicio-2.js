let newString = ""

const palindromeRecursion = string => {
    newString += string[string.length - 1];
    
    if (string.length <= 1) {
        if (newString == string) {
            return true
        } else {
            return false
        }
    } else {
        return palindromeRecursion(string.substring(0, string.length - 1));
    }
}

console.log(palindromeRecursion("ABVGTTGVBA"));

const palindromeLoop = string => {
    
}