const tableDiv = document.querySelector('.js-table');
const submitBtn = document.querySelector('.js-submit');
const validationDiv = document.querySelector('.js-validation');
const validateList = document.querySelector('.js-validation-list');

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
/* function validateAddition(addition, string, i) {
  if (addition !== 100) {
    const validateItem = document.createElement('li');
    const validateResult = document.createTextNode(`Sorry the addition in ${string} number ${i + 1} is not iqual to 100`);
    validateItem.appendChild(validateResult);
    validateList.appendChild(validateItem);
    return;
  }
} */
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
      console.log(valueNum);
      sum += valueNum;
    }
    /* validateAddition(sum, 'row', i); */
    if (sum !== 100) {
      const validateItem = document.createElement('li');
      const validateResult = document.createTextNode(`Sorry the addition in row number ${i + 1} is not iqual to 100`);
      validateItem.appendChild(validateResult);
      validateList.appendChild(validateItem);
      return;
    }
  }
  for (let i = 0; i < yVal; i++) {
    let sumColumn = 0
    for (j = 0; j < xVal; j++) {
      let valueColumn = document.querySelector(`.row${j}-column${i}`).value;
      let valueNumColumn = Number(valueColumn);
      validateInteger(valueNumColumn, i, j);
      console.log(valueNumColumn);
      sumColumn += valueNumColumn;
    }
    /* validateAddition(sumColumn, 'column', i); */
    if (sumColumn !== 100) {
      const validateItem = document.createElement('li');
      const validateResult = document.createTextNode(`Sorry the addition in column number ${i +1} is not iqual to 100`);
      validateItem.appendChild(validateResult);
      validateList.appendChild(validateItem);
      return;
    }
  }
  const validateResult = document.createTextNode(`Congrats. All the rows and columns additions are iqual to 100`);
  const validateItem = document.createElement('li');
  validateItem.appendChild(validateResult);
  validateList.appendChild(validateItem);
});
