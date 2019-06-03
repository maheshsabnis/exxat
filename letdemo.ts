function OldVar(x) {
    if(x) {
        var i = 10;
        console.log(i);
    }
    i = i+1;
    console.log('Out of if block ' + i);
}
OldVar(true);
OldVar(false);
function LetDemo(x){
    let j;
    if(x) {
     j = 10;
        console.log(j);
    }
    j = j+1;
    console.log('Out of if block ' + j);
}
LetDemo(true); LetDemo(false);