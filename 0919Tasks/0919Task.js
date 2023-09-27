const student = [
  {
    Name:'John',
    Score1: 47,
    Score2: 46
  },
  {
    Name: 'Bob',
    Score1: 23,
    Score2: 24
  },
  {
    Name: 'Nick',
    Score1: 40,
    Score2: 35
  },
  {
    Name: 'Alex',
    Score1: 44,
    Score2: 45
  }];
  const setDegree = ['A', 'B', 'C', 'D', 'E'];
  const passLimit = [91, 81, 71, 61, 51];

  function ttlScore (name) {
    if (name === student[0].Name) {
      const ttl = student[0].Score1 + student[0].Score2;
      return ttl;
    } else if(name === student[1].Name) {
      const ttl = student[1].Score1 + student[1].Score2;
      return ttl;
    } else if (name === student[2].Name) {
      const ttl = student[2].Score1 + student[2].Score2;
      return ttl;
    } else {
      const ttl = student[3].Score1 + student[3].Score2;
      return ttl;
    }
  };

  function studentGrade (score) {
    if ( score >= passLimit[0]) {
      return setDegree[0];
    } else if(score >= passLimit[1]) {
      return setDegree[1];
    } else if(score >= passLimit[2]) {
      return setDegree[2];
    } else if (score >= passLimit[3]) {
      return setDegree[3];
    } else {
      return setDegree[4];
    }
  };
  student[0].Degree = studentGrade(ttlScore('John'));
  student[1].Degree = studentGrade(ttlScore('Bob'));
  student[2].Degree = studentGrade(ttlScore('Nick'));
  student[3].Degree = studentGrade(ttlScore('Alex'));

  console.table(student);

  for(var i = 0; i < student.length; i++) {
    console.log(student[i].Name + (student[i].Score1 + student[i].Score2))
  };

