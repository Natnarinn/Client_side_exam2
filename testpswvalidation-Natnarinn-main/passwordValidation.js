// 65130500018 Natnarin Chairisiripanich
function isPasswordValid(password) {
    if(password === null || password === undefined) {
        return false
    }

    if(password.length < 8) {
        return false
    }
}
    
    
module.exports = isPasswordValid
