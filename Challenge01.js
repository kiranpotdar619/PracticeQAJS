function questionName(input) {

  let totalSteps = input.length;
  let passcount = 0, failcount = 0, skipcount = 0, duration = 0;
  let failed = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i]["status"].includes("passed"))
      passcount++;
    if (input[i]["status"].includes("failed")) {
      failcount++;
      failed = input[i]["name"];
    }
    if (input[i]["status"].includes("skipped"))
      skipcount++;

    duration = duration + input[i]["durationMs"];

  }
  let passStr = "Passed: " + passcount;
  let failStr = "Failed: " + failcount;
  let skipStr = "Skipped: " + skipcount;
  duration = "Total Duration: " + duration + "ms";
  let failSteps = "Failed Steps: " + failed;
  return "Total Steps: " + totalSteps + " " + passStr + " " + failStr + " " + skipStr + " " + duration + " " + failSteps;
}
