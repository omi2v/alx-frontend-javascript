export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = false;

  if (trueOrFalse) {
    var task = true;
    var task2 = true;
  }

  return [task, task2];
}
