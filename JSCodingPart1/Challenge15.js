function calculateJsBasicsWeightedScore(passed, failed, skipped) {
  // write your code here
  let sum = (passed * 2) - (failed);
  return sum;
}
