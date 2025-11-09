//palindrrom
//basic 
const isPalindrom = (str) => {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    const reversed = normalized.split("").reverse().join("")
    if (normalized === reversed) {
        return true
    }
    return false;
}
// console.log(isPalindrom("A man, a plan, a canal: panama"))

//two pointer method
const isPalindromTwoPointer = (str) => {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    let left = 0
    let right = normalized.length - 1
    while (left < right) {
        if (normalized[left] !== normalized[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindromTwoPointer("A man, a plan, a canal: panama"))
