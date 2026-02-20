/* Write a isValidPassword function
It accepts 2 arguments: password and username
Password must:
    - Be at least 8 characters long
    - cannot contain spaces
    - cannot contain the username
If all requirements are met, return true.
otherwise: false

isValidPassword('89Fjjlnms', 'dogLuvr'); //true

isValidPassword('dogLuver123!', dogLuvr) //false
isValidPassword('hullo12!', dogLuvr) //false
isValidPassword('asdnaod asidjiaj!', dogLuvr) //false
*/

function isValidPassword(password, username){
    if(password.length < 8) {
        return false;
    }
    if(password.indexOf(' ') !== -1 ){
        return false;
    }
    if(password.indexOf(username) !== -1) {
        return false;
    }
    return true;
}

// function isValidPassword(password, username) {
//     if (
//         password.length < 8 ||
//         password.indexOf(' ') !== -1 ||
//         password.indexOf(username) !== -1
//     ) {
//         return false;
//     }
//     return true;
// }

