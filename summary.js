var tableLength = 12;
var tourDestination = ['coxsbazar', 'nepal', 'vutan', 'paris'];

tourDestination.indexOf('vutan');

var forthDestination = tourDestination[3];
tourDestination[1] = 'srilanka';

tourDestination.push('london');
tourDestination.pop();

if (tourDestination[1] == 'nepal') {
    console.log('phara ahare ahare');
}
else if (tourDestination[1] == 'china') {
    console.log('chaina janbo nah');
}
else if (tourDestination.length == 4) {
    console.log('aro taka ase aro besi ghurbo');
}
else {
    console.log('kuthau jabo nah basay thakbo mosa morbo');
}

var eggPrice = 32;
var myBudget = 32;
if (eggPrice <= myBudget) {
    console.log('ami din khamu');
}


if (eggPrice >= myBudget) {
    console.log('lebu diya vat khabo');
}