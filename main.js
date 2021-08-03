const firstYearContainer = [];
const expeledStudents = [];

// Render to Dom
const renderToDom = (divId,textToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToRender;
}

const addsForm = () => {
    const form =`
    <div class="input-group">
    <p> Student's Name </p>
    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Name"
      aria-describedby="search-addon" />
    <button type="button" class="btn btn-outline-primary">Sort!</button>
  </div>
    `
    renderToDom("#formContainer", form);
}

//Frist button function - Will need this 
//const sortButton = () => {
   // const sort = document.querySelector(#buttonContainer);
}

//This starts my application 
const init = () => {
    addsForm();
}

init();