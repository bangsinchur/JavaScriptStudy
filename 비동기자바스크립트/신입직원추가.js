import { getInterviews, getEmployees } from './async신입직원.js';

function addNewEmployee(employees, interview) {
  const { name, department } = interview;
  const newEmployee = {
    id: employees.length + 1,
    name,
    department,
    email: `${name}@codeitmall.kr`,
  };
  employees.push(newEmployee);
}

const employees= await getEmployees();
const interviews= await getInterviews();

//some ,filter 다시보기.
//some은 찾고자하는 요소를 찾으면 거기서 멈추고
//filter는 배열내 찾고하자 하는 요소를 모두 찾아서 나열해줌.


//interviews.filter(interview => interview.result === "pass").forEach(interview => addNewEmployee(employees,interview))



const checkPass = interview => interview.result === "pass";
const hire = interview => addNewEmployee(employees, interview);
interviews.filter(checkPass).forEach(hire);

console.log(employees);

// const passedInterviews = interviews.filter(interview => interview.result === "pass");
// passedInterviews.forEach(interview => addNewEmployee(employees, interview));
// interviews.forEach((interview) => {
//     if (interview.result === 'pass') {
//       addNewEmployee(employees, interview);
//     }
//   });


