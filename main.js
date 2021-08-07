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
  document.querySelector("#letsBegin").addEventListener("click", addsForm);
}
// Function for calling form for new students
const addsForm = () => {
  const domString = `
    <div id="form-entry" class="input-group">
    <label for"Name" class="form-label">Name</label> 
    <input type="text" class="form-control rounded" placeholder="Name" aria-label="Name"
      aria-describedby="search-addon" id="Name"/>
    <button type="button" id="sortButton" class="btn btn-outline-primary">Sort!</button>
  </div>`
  renderToDom("#formContainer", domString);
  document.querySelector("#sortButton").addEventListener("click", handleButtonClick);
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
  event.preventDefault(); //Prevents page refresh
  const sortClick = event.target.id;
  if (sortClick === "sortButton") {

    const student = {
      name: document.querySelector("#Name").value,
      house: houseAssignmet(1, 5)
    };
    firstYearContainer.push(student);
    studentAssignment(firstYearContainer)
  }
}

// Takes house and assigns a color 

const houseColor = (houseAssignmet) => {

  if (houseAssignmet === "Griffandor") {
  return '#AE0001';
} else if (houseAssignmet = "Ravenclaw"){
  return '#F0FFFF';
}
  else if (houseAssignmet = "HufflePuff") {
    return '#ffcc00';
} else {
  return '#006600';
}
}
//Passes cards into DOM
const studentAssignment = (array) => {
  let domString = "";
  array.forEach((student) => {
    domString += `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
  <h5 class="card-title">"${student.name}"</h5>
    <p class="card-text">"${student.house}".</p>
    <button type="button" id="Expelled" class="btn btn-outline-primary">Expel</button>
</div>
    `;
  })
  renderToDom("#firstYearContainer", domString);
};


const expelButton = (event) => {

  const expelClick = event.traget.id;

  if (targetId === "Expelled") {
    const darkSide = student.splice(expelClick, 1);
    expeledStudents.push(darkSide[0]);
    valdArray(expeledStudents);
  }
};

//Creats array for Vald Cards
const valdArray = (array) => {
  let domString = ""
  array.forEach((student) => {
    domString += `    <div class="expelCard" style="width: 18rem;">
    <div class="expelCardBody">
    <h5 class="expelCardTitle">${student.name} </h5>
    <p class="expelCardText">Has joined Voldemort's Army!</p>
    </div>
</div>
`
  });
  renderToDom("#expeledStudents", domString);
};


// Handle botton clicks
const buttonEvents = () => {
  document.querySelector("#expeled").addEventListener("click", expelButton);
}
//This starts my application 
const init = () => {
  welcomeCard();
  firstEventListner();
  buttonEvents();
}

init();