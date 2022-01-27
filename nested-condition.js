var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscutPrice = 10;
var myBudget = 100;
var packedWell = true;

// if (danishPrice < myBudget) {
//     console.log('Danish kyeye danish jabo.');
// }
// else if (butterBreadPrice < myBudget) {
//     console.log('Butter bon diye cha khamu');
// }
// else if (toastBiscutPrice < myBudget) {
//     console.log('Toast diya khabo');
// }
// else {
//     console.log('Batasha diya cha khabo');
// }

if (danishPrice < myBudget) {
    if (packedWell == true) {
        console.log('danish khabo');
    }
    else {
        console.log('danish khabo nah ! karon ami khawar age mchi kheye ordek korse');
    }
}