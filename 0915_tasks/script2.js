/**************************CODING TASK*********************************

1. Create variables to represent scores of exams for Matt and Simon and set values 80 and 45;
2. Create variable to set the lower limit for passing an exam and assign to it value as 51;
3. Write the condition in if statement, which will check if both students have passed an exam and log
   the result in console;
4. Use else if statement in order to check if one of the students has passed an exam and log the result
   in console;
5. Use else statement in order to display in console that both students have failed;
6. In case of passing the exam by one of the students, find out which one was that and display in console
   as an additional information the student name and his points
7. Test all the possible cases (a. both students passed; b. Matt passed and Simon failed; c. Simon passed and
  Matt failed; d. both students failed).
*/


//The another way (I tried to make it simple to read and edit using function.)

const passScore = 75;
const MattScore = 70;
const SimonScore = 80;
const Matt = MScore (MattScore);
const Simon = SScore (SimonScore);

 if (Matt === 'Passed' && Simon === 'Passed') {
        console.log('Both students have passed');
    } else if (Matt ==='Failed' || Simon === 'Failed') {
      console.log('One of the student passed');
        if(Matt ==='Passed') {
          console.log(`Simon failed. His score is ${SimonScore}.`);
        } else {
          console.log(`Matt failed. His score is ${MattScore}.`);
        }
    } else {
      console.log('Neither passed.');
    }
function MScore (mscore) {
  if (mscore > passScore) {
   return 'Passed';
  } else {
   return 'Failed';
  }
};

function SScore (sscore) {
  if (sscore > passScore) {
   return 'Passed';
  } else {
   return 'Failed';
  }
};