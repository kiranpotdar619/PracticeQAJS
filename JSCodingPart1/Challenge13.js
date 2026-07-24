function checkJsBasicsReadinessGate(hasSetup, hasPractice, hasNotes) {
  // write your code here
  if (hasSetup == true && hasPractice == true && hasNotes == true) {
    return "READY";
  }
  else
    return "BLOCKED";
}
