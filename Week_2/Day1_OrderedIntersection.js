/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
//loop through both, filter out any duplicated values, and create a new list
// function orderedIntersection(sortedA, sortedB) { 
//     let mergedArray = [];
    
//     for(let i = 0; i < sortedA.length; i++) {
//         for(let j = 0; j < sortedB.length; j++) {
//             if(sortedA[i] === sortedB[j]) {
//                 if(!mergedArray.includes(sortedA[i])) {
//                     mergedArray.push(sortedA[i]);
//                 }
//             }
//         }
//     }
//     return mergedArray;
// }

// function orderedIntersection(sortedA, sortedB) {
//     const result = new Set();
//     for(let i = 0; i < sortedA.length; i++) {
//         for(let j = 0; j < sortedB.length; j++) {
//             if(sortedA[i] === sortedB[j]) {
//                 result.add(sortedA[i]);
//             }
//         }
//     }
//     return [...result];
// }

function orderedIntersection(sortedA, sortedB) {
    let idxA = 0;
    let idxB = 0;

    const result = [];

    while(idxA < sortedA.length && idxB < sortedB.length) {
        if(sortedA[idxA] === sortedB[idxB]) {
            if(result[result.length - 1] === sortedA[idxA]) {
                result.push(sortedA[idxA]);
            }
            idxA++;
            idxB++;
        }
        else if(sortedA[idxA] < sortedB[idxB]) {
            idxA++;
        }
        else {
            idxB++;
        }
    }
    return result;
}
console.log(orderedIntersection(numsA1,numsB1));
console.log(orderedIntersection(numsA2,numsB2));
console.log(orderedIntersection(numsA3,numsB3));
