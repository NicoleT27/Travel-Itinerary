$(document).ready(function() {
  const storedInputValue = localStorage.getItem('budgetAmount'); //stored budget will be shown and displayed when user refresh page
  if(storedInputValue) {
    $('#budget-track').text('Budget:' + '$' + storedInputValue);
  }
  $('#save-budget-amount').on('click', function(event){ //user input budget amount and saved in local storage
   event.preventDefault();
   const newBudgetAmount = $('#budgetdollar-amount').val();
   $('#budget-track').text('Budget:' + '$' + storedInputValue) //the area or element to display the budget input
 
  localStorage.setItem('budgetAmount', newBudgetAmount);
  //close modal
  $('#edit-budget-modal').modal('hide');
  console.log(newBudgetAmount);
  
});
   $('#save-budget-amount').on('click', function(event){
   event.preventDefault();
  var inputBudgetEl = $('#budgetdollar-amount').val();
  localStorage.setItem('budgetAmount', inputBudgetEl);
  //close modal
  $('#edit-budget-modal').modal('hide');
  console.log(inputBudgetEl);
 
    const storedInputValue = localStorage.getItem('budgetAmount');
    if (storedInputValue) {
        // Do something with the stored input value
        $('#budget-track').text('Budget: ' + '$' + storedInputValue);
        let budgetDisplay = $('#budget-track').val();
        localStorage.setItem('budgetShown', budgetDisplay);
        
    };
   

   });
    $('#save-expense-details').on('click', function(event){
    event.preventDefault();
    let selectedExpense = $('#expense-list-name').val();
    $('#add-expense-details').modal('hide');
    console.log(selectedExpense);
  });
 
});





var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling; //next sibling is the p-tag, which will hold the expense list
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function copyText() {
      
  // Copy text into clipboard 
  //copy invite link 
  navigator.clipboard.writeText
      ("https://github.com/Saragar710/Travel-Itinerary");
}