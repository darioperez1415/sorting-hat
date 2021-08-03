const firstYearContainer = [];
const expeledStudents = [];

// Render to Dom
const renderToDom = (divId,textToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToRender;
}

const addsForm = () => {
    const form =`
    <form class="form-inline">
  <div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only">Student</label>
    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary mb-2">Sort!</button>
</form>
    `
    renderToDom("#formContainer", form);
}

//Frist button function
const sort 

//This starts my application 
const init = () => {
    addsForm();
}

init();