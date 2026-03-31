let n = 5;
let letter = "1";

for(let i = 0; i<n; i++){
    let row = ""
    for(j=0; j<=i; j++){
        row = row + letter;
        letter === "1" ? letter = "0" : letter = "1";
    }
    console.log(row);
}


