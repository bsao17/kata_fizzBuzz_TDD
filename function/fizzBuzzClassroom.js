import fizzBuzz from "./fizzBuzz.js";

let studentArray = [];
function localStudent(students) {
  for (let i = 1; i <= students; i++) {
    studentArray.push(i);
  }
  let result = studentArray.map((item) => fizzBuzz(item));
  return String(result);
}

export default localStudent;
