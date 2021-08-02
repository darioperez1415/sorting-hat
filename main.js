cosnt firstYears = [];
cosnt expeledStudents = [];

// Render to Dom
const renderToDom = (divId,textToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToRender;
}
//Creates event listners on Dom

cosnt buttons = () => {

    cosnt domString =`
    <button type="button" class="btn btn-primary" id="sorting">Let's Start Sorting</button>
    `
    renderToDom("#formContainer", domString);
}

//This starts my application 
// cosnt init = () => {
//     buttons();
// }