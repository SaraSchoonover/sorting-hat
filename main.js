console.log("CONNECTED");


const houses = [
  {
    name: "",
    house: "",
    
  },
  {
    name: "",
    house: "",
    
  },
  {
    name: "",
    house: "",
    
  },
  {
    name: "",
    house: "",
   
  },
]; 


const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

// card
const cardBuilder = (arr) => {
  let domString = "";

  for (let i = 0; i < arr.length; i++) {
    domString += `<div class="student-card" style="width: 18rem;" id=${i}>
  
                    <div class="card-body">
                    <h5 class="card-title">${arr[i].name}</h5>
                      <p class="card-text">${arr[i].house}</p>
                      <button type="button" class="btn btn-danger" id="${arr[i].id}">Expel</button>
                    </div>
                  </div>`;
  }

  printToDom('#students', domString);
}
//STUDENT FORM //
const createForm = () => {
  let form = `<form>
  <div class="mb-3">
  <label for="student" class="form-label">Student</label>
  <input type="text" class="form-control" id="student" required>
  </div>
  <button type="submit" class="btn btn-info" id="sort">Sort!</button>
  </form>`

  printToDom('#form', form);
  document.querySelector('#sort').addEventListener('click', createForm);
};

const buttonEvents = () => {
	document.querySelector('#btn').addEventListener('click', cardBuilder);
  
};



const init = () => {
  buttonEvents();
  cardBuilder(houses);
};

init();
