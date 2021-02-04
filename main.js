console.log("CONNECTED");


const studentName = []; 
const hogwartsHouse = ["Ravenclaw", "Gryffindor", "Slytherin", "Hufflepuff"];
const voldemortsArmy = [];


const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

//STUDENT FORM //
const createForm = () => {
  let formString = `<form>
  <div class="mb-3">
  <label for="student" class="form-label">Student's Name</label>
  <input type="text" class="form-control" id="student" placeholder="Enter your name" required>
  </div>
  <button type="submit" class="btn btn-dark" id="sort">Begin!</button>
  </form>`

  printToDom('#form', formString);
   document.querySelector('form').addEventListener('submit', getFormInfo);
  
};

const getFormInfo = (e) => {
  e.preventDefault();

  
  const name = document.querySelector('#student').value;
  const house = hogwartsHouse[Math.floor(Math.random() * hogwartsHouse.length)];

  const studentIds = studentName
    .map((student) => student.id)
    .sort((a, b) => a - b);

  const id = studentIds.length ? studentIds[studentIds.length - 1] + 1 : 1;

  const obj = {
    name,
    house,
  };
  studentName.push(obj);

  cardBuild(studentName);
  console.log(studentName);
   document.querySelector('form').reset();
}


//student card//
const cardBuild = (arr) => {
  let domString = "";

  for (let i = 0; i < arr.length; i++) {
    domString += `<div class="card m-1" style="width: 18rem;" id=${i}>
  
                    <div class="card-body1">
                    <h5 class="card-title">${arr[i].name}</h5>
                      <p class="card-text">${arr[i].house}</p>
                      <button type="button" class="btn btn-danger" id="${i}">Expel</button>
                    </div>
                  </div>`;
  }

  printToDom('#students', domString);
  //  document.querySelector('form').addEventListener('submit', getFormInfo);

};

const expelStudent = (e) => {
const targetType = e.target.type;
const targetId = e.target.id;

if (targetType === 'button') {
  const studentIndex = studentName.findIndex(student => student.id === targetId);
    let expel = studentName.splice(studentIndex, 1);
     voldemortsArmy.push(...expel);
 }
 cardBuild(studentName);
 armyBuild(voldemortsArmy);
 console.log(voldemortsArmy);
}

const armyBuild = (arr) => {
  let domString = '';

  for (let i = 0; i < arr.length; i++) {
    domString += `<div class="card m-1" style="width: 18rem;" id=${i}>
  
    <div class="card-body2">
    <h4>Voldemort's Army</h4>
    <h4 class="card-title">${arr[i].name}</h4>
      <p class="card-text">${arr[i].house}</p>
     
    </div>
  </div>`;
  }
  printToDom('#army', domString);
};

// const handleButtonClick = () => {
//   const buttonId = e.target.id;

//   // CHANGING BG COLOR BASED ON BUTTON CLICK
//   if (buttonId === 'Slytherin') {
//     // DARK MODE
//     document.querySelector('students').style.backgroundColor = '#000';
  

// }


const buttonEvents = () => {
	document.querySelector('#btn').addEventListener('click', createForm);
  document.querySelector('#students').addEventListener('click', expelStudent);
  // document.querySelector('#btn').addEventListener('click', handleButtonClick);
  // document.querySelector('#Doc').addEventListener('click', handleButtonClick);
  // document.querySelector('#Aja').addEventListener('click', handleButtonClick);
  // document.querySelector('#Trinity').addEventListener('click', handleButtonClick);
};



const init = () => {
  buttonEvents();
  
};

init();
