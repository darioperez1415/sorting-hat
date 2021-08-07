const firstYearContainer = []
const expeledStudents = []
const studentHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]

//Render to Dom
const renderToDom = (divId, textToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToRender;
};

//Distlays Welcome card on the DOM
const welcomeCard = () => {
  const domString = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Welcome to Hawarts!</h5>
    <p class="card-text">The first-year Hogwarts School of Witchcraft and Wizardry students are assigned their houses at the annual Sorting Ceremony.</p>
    <button type ="button" id="letsBegin" class="btn btn-primary">Let's begin!</button>
  </div>
</div>
  `
  renderToDom("#welcomeContainer", domString);
};

//Frist event lister, after user clicks "letsBegin", this function adds form

const firstEventListner = () => {
  document.querySelector("#letsBegin").addEventListener("click",addsForm);
}
// Function for calling form for new students
const addsForm = () => {
  const newStudentForm = `
    <div id="form-entry" class="input-group">
    <label for"Name" class="form-label">Name</label> 
    <input type="text" class="form-control rounded" placeholder="Name" aria-label="Name"
      aria-describedby="search-addon" id="Name"/>
    <button type="button" id="sortButton" class="btn btn-outline-primary">Sort!</button>
  </div>`
  renderToDom("#formContainer", newStudentForm);
  document.querySelector("#sortButton").addEventListener("click",handleButtonClick);
}
//Function for house assingnment 
const houseAssignmet = () => {
  const houseIdentifier = Math.floor(Math.random() * 4) + 1;
  if (houseIdentifier === 1) {
    return "Griffandor";
  } else if (houseIdentifier === 2) {
    return "Ravenclaw";
  } else if (houseIdentifier === 3) {
    return "hufflepuff";
  } else {
    return "Syltherin";
  }
}
//Handles sort button click

const handleButtonClick = (event) => {
  event.preventDefault();
  const sortClick = event.target.id;
  if (sortClick === "sortButton") {

    const newSudent = {
      name: document.querySelector("#Name").value,
      house: houseAssignmet(1, 5)
    };
    firstYearContainer.push(newSudent);
  studentAssignment(firstYearContainer)
  }
}

//Passes cards into DOM
const studentAssignment = (newSudent) =>{
  let  newPerson= "";
  newSudent.forEach((student) => {
    newPerson += `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
  <h5 class="card-title">"${student.name}"</h5>
    <p class="card-text">"${student.house}".</p>
    <button type="button" id="sortButton" class="btn btn-outline-primary">Sort!</button>
</div>
    `;
  })
  renderToDom("#firstYearContainer",newPerson);
};

//This starts my application 
const init = () => {
  welcomeCard();
  firstEventListner();

}

init();