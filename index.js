function nextMultipleof5(n) {
    if (n % 5 == 0) {
        return n + 5;
    } else if (n % 5 != 0) {
        let x = n % 5;
        return n - x + 5;
    }
}
function gradingStudents(grades) {
    //console.log(grades);
    let newGrades = [];
    for (let i of grades) {
        //console.log(i);
        let score = nextMultipleof5(i) - i;
        if (i <= 38 || score >= 3) newGrades.push(i);
        else if (score < 3) newGrades.push(nextMultipleof5(i));
    }
    return newGrades;
}
/* 
gradingStudents([1, 2, 52, 43]).forEach((x) => console.log(x));
let values = gradingStudents([39, 87, 68]);
console.log(values);
 */

/* 
    Function
    --------
    n = 9
    ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
    */
let num = 9;
let array = [5, 5, 1, 2, 2, 2, 2, 2, 3, 4, 3];
function sockMerchant(n, ar) {
    // Write your code here
    let counter = 0;
    for (let i = 0; i < ar.length; i++) {
        let arElement = ar[i];
        for (let j = i + 1; j < ar.length; j++) {
            let compareElement = ar[j];
            console.log(`${arElement} - ${compareElement}`);
            if (arElement === compareElement) {
                ar[j] = compareElement + " - Checked";
                counter++;
                break;
            }
        }
    }
    return counter;
}

/* console.log(sockMerchant(num, array)); */

// Counting Valleys
// left function and test diferent
// let counter = 0,
//     U = 1,
//     D = -1;
// for (let i of path) {
//     if (i == U) {
//         counter++;
//     } else if (i == D) {
//         counter--;
//     }
// }
// return counter;
/* 
faltaba el nivel
El valle empieza con paso de bajo el nivel del mar y  termina con paso sobre el nivel mar
 */
function countingValleys(steps, path) {
    let valleysCounter = 0,
        level = 0,
        posibleValley = 0;
    for (let i = 0; i <= steps; i++) {
        let step = path[i];
        if (step == "D") {
            // && level <= 0
            //h
            console.log("Posible Valley, a step down ");
            level--;
            posibleValley++;
        } else if (step == "U" && level <= 0) {
            console.log("Reduce posible Valley, a step up ");
            level++;
            posibleValley--;
            if (level == 0 && posibleValley == 0) {
                valleysCounter++;
            }
        } else {
            level++;
            posibleValley--;
        }
        console.log(`${valleysCounter} - ${level} - ${posibleValley}`);
    }

    return valleysCounter;
}
let p = [
        "D",
        "D",
        "U",
        "D",
        "D",
        "U",
        "U",
        "U",
        "D",
        "D",
        "U",
        "D",
        "D",
        "U",
        "U",
        "U",
    ],
    st = p.length;
console.log(countingValleys(st, p));
