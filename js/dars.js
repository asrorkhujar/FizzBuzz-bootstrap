
//FizzBUzz
//O'zgaruvchilarni topib olaman
var elForm = document.querySelector('#formFizzBuzz');
var elInputAmount = elForm.querySelector('#inputAmountFizz');
var elOutput = elForm.querySelector('#outputAmountFizz');

//Formani ketib qolishini oldini olamiz
elForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

//Shartni yozamiz
 //Agar kiritilgan son 5 ga va 3ga qoldiqiz bo'linsa ekranda FizzBuzz so'zi chiqadi
  if (Number(elInputAmount.value % 5 === 0) && Number(elInputAmount.value % 3 === 0)) {
  elOutput.textContent = 'FizzBuzz';
}

//Agar kiritilgan son 5 ga va 3ga qoldiqiz bo'linsa ekranda Fizz so'zi chiqadi
else if (Number(elInputAmount.value % 5 ===0)) {
    elOutput.textContent = 'Fizz';
  }

  //Agar kiritilgan son 3 ga va 3ga qoldiqiz bo'linsa ekranda Buzz so'zi chiqadi
  else if (Number(elInputAmount.value % 3 ===0)) {
    elOutput.textContent = 'Buzz';
  }

  //Agar kiritilgan son 5ga ham 3ga ham bo'linmasa ekranda kiritilgan son chiqadi
  else {
    elOutput.textContent = elInputAmount.value;
  }
});


