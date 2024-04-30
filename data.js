const data = () => {
  let array = [];
  const data1 = {
    name: 'Alice',
    age: 20,
    grade: 'A',
    subjects: ['Math', 'Science', 'English']
  };

  array.push(data1);
return array;

}

const jsonData = JSON.stringify(data());

// const data1 = {
//       name: 'Alice',
//       age: 20,
//       grade: 'A',
//       subjects: ['Math', 'Science', 'English']
//     };

//     const jsonData = JSON.stringify(data1);

module.exports = jsonData;




