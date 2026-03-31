let n = 5;

// Main loop
for(let i=0; i<n; i++){
    let row = "";

    // Loop for space
    for(let j=0; j<n-(i+1); j++){
        row = row + " ";
    }

    // Loop for printing "*"
    for(let k=0; k<i+1; k++){
        row = row + "*";
    }

    console.log(row);
}