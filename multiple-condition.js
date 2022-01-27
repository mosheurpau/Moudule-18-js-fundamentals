var gotJob = false;
var monySaved = 50000;
var hasFlat = false;
var hasHouse = true;

// if (gotJob == true && monySaved > 200000) {
//     console.log('Cholo biya kore feli');
// }
// else {
//     console.log('Tor kopale biya nai!!');
// }
// if (gotJob == true && monySaved > 200000 && hasFlat == true) {
//     console.log('Cholo biya kore feli');
// }
// else {
//     console.log('Tor kopale biya nai!!');
// }
// if (gotJob == true || monySaved > 200000) {
//     console.log('Cholo biya kore feli');
// }
// else {
//     console.log('Tor kopale biya nai!!');
// }
// if ((gotJob == true && monySaved > 200000) || (hasFlat == true)) {
//     console.log('Cholo biya kore feli');
// }
// else {
//     console.log('Tor kopale biya nai!!');
// }
if ((gotJob == true && monySaved > 200000) || (hasFlat == true || hasHouse)) {
    console.log('Cholo biya kore feli');
}
else {
    console.log('Tor kopale biya nai!!');
}