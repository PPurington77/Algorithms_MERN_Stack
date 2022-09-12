// Interview Algo given to alumni Oct 2019

/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/


const nums2 = [];
const sum2 = 5;
const expected2 = [];

const nums3 = [10, 15, 20, 35, 30];
const sum3 = 5;
const expected3 = [];

// Bonus:
const nums4 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum4 = 16;
const expected4 = [
    [2, 5, 3, 6],
    [3, 6, 7],
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0],
];

// Bonus:
const nums5 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum5 = -16;
const expected5 = [
    [-2, -5, -3, -6],
    [-3, -6, -7],
    [-3, -6, -7, -0],
    [-3, -6, -7, -0, -0],
];
const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */

//look for over/under
// function findConsqSums(nums, targetSum) {
//     let answerContainer = [];
//     let tempContainer = [];
//     let currentSum = 0;
//     let startingIndex = 0;
//     for(startingIndex; startingIndex < nums.length; startingIndex++) {
//         if(nums[startingIndex] > targetSum) continue;
        

//         if(currentSum < targetSum) {
//             tempContainer.push(nums[startingIndex]);
//             currentSum += nums[startingIndex];
//         }
//         else if(currentSum === targetSum) {
//             answerContainer.push(tempContainer);
//             currentSum = 0;
//             tempContainer = [];
//         }
//         else {
//             currentSum = 0;
//             tempContainer = [];
//         }
//     }
//     return answerContainer;
// }

function findConsqSums(nums, targetSum) {
    let answerContainer = [];
    let tempContainer = [];
    let currentSum = 0;
    let startingIndex = 0;
    let indexCounter = 0;

    while(startingIndex < nums.length) {

        if(currentSum < targetSum) {
            tempContainer.push(nums[startingIndex]);
            currentSum += nums[startingIndex];
            startingIndex++;
            indexCounter++;
        }
        else if(currentSum === targetSum) {
            answerContainer.push(tempContainer);
            currentSum = 0;
            tempContainer = [];
            startingIndex = startingIndex - indexCounter + 1;
            indexCounter = 0;
        }
        else {
            currentSum = 0;
            tempContainer = [];
            startingIndex = startingIndex - indexCounter + 2;
            indexCounter = 0;
        }
    }
    return answerContainer;
}

console.log(findConsqSums(nums4, sum4));
