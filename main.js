console.log("CONNECTED");


const studentName = []; 
const hogwartsHouse = ["Ravenclaw", "Gryffindor", "Slytherin", "Hufflepuff"];

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
  <button type="submit" class="btn btn-form" id="sort">Let's Start Sorting!</button>
  </form>`

  printToDom('#form', formString);
   document.querySelector('form').addEventListener('submit', getFormInfo);
  
};

const getFormInfo = (e) => {
  e.preventDefault();

  
  const name = document.querySelector('#student').value;
  const house = hogwartsHouse[Math.floor(Math.random() * hogwartsHouse.length)];

  const obj = {
    name,
    house,
  };
  studentName.push(obj);

  cardBuilder(studentName);
  console.log(studentName);
   document.querySelector('form').reset();
}


//student card//
const cardBuilder = (arr) => {
  let domString = "";

  for (let i = 0; i < arr.length; i++) {
    domString += `<div class="card m-1" style="width: 18rem;" id=${i}>
  
                    <div class="card-body">
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



}

const buttonEvents = () => {
	document.querySelector('#btn').addEventListener('click', createForm);
  // document.querySelector('#sort').addEventListener('click', createForm);
  // document.querySelector('form').addEventListener('submit', getFormInfo);
};



const init = () => {
  buttonEvents();
  // cardBuilder(studentName);
};

init();
