let vals = require('fs').readFileSync('../../data/day1.txt', 'utf-8').split(/\r?\n/).map(x => parseInt(x, 10));

for (let i = 0; i < vals.length; i++) {
    const el1 = vals[i];

    for (let j = 0; j < vals.length; j++) {
        const el2 = vals[j];

        if (i === j) {
            continue;
        }

        // Part 1
        if (el1 + el2 === 2020) {
            console.log(`Two element product ${el1 * el2}`);
        }

        for (let k = 0; k < vals.length; k++) {
            const el3 = vals[k];
    
            if (j === k) {
                continue;
            }

            // Part 2
            if (el1 + el2 + el3 === 2020) {
                console.log(`Three element product ${el1 * el2 * el3}`);
            }
        }    
    }
}