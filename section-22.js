// form

// Step1: Select our elements
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let form = document.querySelector('#formulaire');

// Step 2: Hide the error
error.style.display = 'none';

// Step 3: Generate a random number

// Generate a number between 0 and 1000
let randomNumber  = Math.floor(Math.random() * 1001);

let coups = 0;
let chosenNumber;

//  Step 6: Implement the verification function
function checkGuess(number ){
  let instruction = document.createElement('div');

  if(number  < randomNumber  ) {
    instruction.textContent = "#" + coups + " ( " + number  + " ) C'est plus !";
    instruction.className ="instruction moins"

  }
  else if(number  > randomNumber ) {
    instruction.textContent = "#" + coups + " ( " + number  + " ) C'est moins !";
    instruction.className = "instruction plus"
  }
  else {
    instruction.textContent = "#" + coups + " ( " + number  + " ) Félicitations vous avez trouvé le juste prix !";
    instruction.className = "instruction fini";
    input.disabled = true;
  }

  // Insert the element before all others in the container
  document.querySelector('#instructions').prepend(instruction);

}

// Step 4: Check that the user enters a valid number

input.addEventListener('keyup', ()=> {
    if(isNaN(input.value)) {
      // affiche error
      error.style.display = 'inline';
    } else {
        error.style.display = 'none';
    }
});

// Step 5: Handle form submission

// Important: by default, the browser has a default behavior for forms
// When clicking on "submit", it will send the data to another URL
form.addEventListener('submit',(e) => {
  e.preventDefault();  // Prevent the default behavior
//   console.log(e);
if(isNaN(input.value) || input.value == '') {
  input.style.borderColor = "red";
}
else {
    coups++; // Increment the number of attempts
    input.style.borderColor = "silver";  // Reset input border color
    chosenNumber = input.value; // Store the chosen number
    input.value= ''; // Clear the input field
    checkGuess(chosenNumber); // Call the verification function
}
});

// QUIZ
/*
Question1 : Comment faire pour annuler un évènement par défaut ? (Comme annuler l’envoi d’un formulaire) ==> Il faut utiliser
   preventDefault

Question2 : Pour renvoyer l’entier d’un nombre, on peut utiliser la fonction : Math.floor()
  (Math.random ==> cette fonction génère un nombre aléatoire)

*/

