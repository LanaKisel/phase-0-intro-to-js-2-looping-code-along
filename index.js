// Code your solutions in this file
/*
CODE ALONG
for (let age = 30; age<40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!` );
    debugger;};

const gifts = ['teddy bear', "drone", "doll"];
function wrapGifts(gifts) {
    for (let i=0; i<gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}
wrapGifts(gifts);
*/

//fOR LOOP
const names = ["Lana", "Teddy", "Bonny"];

function writeCards(names, event){     
    const messHolder = [];   
       for (let i=0; i<names.length; i++){
        
        const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        messHolder.push(message);
               }
                   debugger;
    return messHolder;
    }
writeCards(["Lana", "Teddy", "Bonny"], "birthday");

//WHILE LOOP
function countDown() {
let countdown = 10;
while (countdown>=0) {
    console.log(countdown--); 
};}
countDown(10);