const tableDiv = document.querySelector('.js-table');
const submitBtn = document.querySelector('.js-submit');
const validationDiv = document.querySelector('.js-validation');
const validateList = document.querySelector('.js-validation-list');
let allIsOk;
let allResults = [];

/* FUNCTION THAT VALIDATES IF THE VALUE IS AN INTEGER */
function validateInteger(value, i, j) {
  let valueNum = Number(value);
  if (Number.isInteger(valueNum) !== true) {
    const validateItem = document.createElement('li');
    const validateResult = document.createTextNode(`row ${i + 1} column ${j + 1} Insert only integers please`);
    validateItem.appendChild(validateResult);
    validateList.appendChild(validateItem);
    return;
  }
}
/* FUNCTION THAT VALIDATES  IF THE ADDITIONS BETWEEN THE ROWS AND THE COLUMN ARE EQUAL TO 100 */
function validateAddition(addition, string, i) {
  if (addition !== 100) {
    const validateItem = document.createElement('li');
    const validateResult = document.createTextNode(`Sorry the addition in ${string} number ${i + 1} is not iqual to 100`);
    validateItem.appendChild(validateResult);
    validateList.appendChild(validateItem);
    return;
  }
}

/* TABLE CREATION WITH USER PARAMETERS */
submitBtn.addEventListener('click', function() {
  const xVal = document.querySelector('.js-x').value;
  const yVal = document.querySelector('.js-y').value;
  const tblContainer = document.querySelector('.js-table')
  const tbl = document.createElement('table');
  const tblBody = document.createElement('tbody');

  window.scrollTo(400, 400);

  if (tblContainer.hasChildNodes()) {
    tblContainer.removeChild(tblContainer.firstChild);
  }
  if (validationDiv.hasChildNodes()) {
    validationDiv.removeChild(validationDiv.firstChild);
  }
  for (let i = 0; i < xVal; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < yVal; j++) {
      const cell = document.createElement('td');
      cell.className ='js-value table-cell';
      const cellInput = document.createElement('input');
      cellInput.type = "number";
      cellInput.classList.add(`row${i}-column${j}`);
      cell.appendChild(cellInput);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  tableDiv.appendChild(tbl);
});

/* TAKING AND VALIDATING THE NUMBERS AND ADDITIONS */
const validateBtn = document.querySelector('.js-validate-btn');
validateBtn.addEventListener('click', function() {
  const xVal = document.querySelector('.js-x').value;
  const yVal = document.querySelector('.js-y').value;
  window.scrollTo(700, 700);
  for (let i = 0; i < xVal; i++) {
    let sum = 0;
    for (let j = 0; j < yVal; j++) {
      let value = document.querySelector(`.row${i}-column${j}`).value;
      let valueNum = Number(value);
      validateInteger(valueNum, i, j);
      sum += valueNum;
    }
    if (sum !== 100) {
      allResults.push(sum);
    }
    validateAddition(sum, 'row', i);
  }
  for (let i = 0; i < yVal; i++) {
    let sumColumn = 0
    for (j = 0; j < xVal; j++) {
      let valueColumn = document.querySelector(`.row${j}-column${i}`).value;
      let valueNumColumn = Number(valueColumn);
      validateInteger(valueNumColumn, i, j);
      sumColumn += valueNumColumn;
    }
    if (sumColumn !== 100) {
      allResults.push(sumColumn);
    }
    validateAddition(sumColumn, 'column', i);
  }
  
  console.log(allResults, allResults.length);
  if (allResults.length === 0) {
    const validateResult = document.createTextNode(`Congrats. All the rows and columns additions are iqual to 100`);
    const validateItem = document.createElement('li');
    validateItem.appendChild(validateResult);
    validateList.appendChild(validateItem);
  } else allResults = [];
});
