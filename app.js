const tableDiv = document.querySelector('.js-table');
const submitBtn = document.querySelector('.js-submit');
const validateDiv = document.querySelector('.js-validation');

submitBtn.addEventListener('click', function() {
  const xVal = document.querySelector('.js-x').value;
  const yVal = document.querySelector('.js-y').value;
  const tbl = document.createElement('table');
  const tblBody = document.createElement('tbody');

  for (let i = 0; i < xVal; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < yVal; j++) {
      const cell = document.createElement('td');
      cell.classList.add('js-value');
      cell.classList.add('table-cell');
      const cellInput = document.createElement('input');
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
  for (let i = 0; i < xVal; i++) {
    let sum = 0;
    for (let j = 0; j < yVal; j++) {
      let value = document.querySelector(`.row${i}-column${j}`).value;
      let valueNum = Number(value);
      if (Number.isInteger(valueNum) !== true) {
        const validateResult = document.createTextNode('Insert only integers please');
        validateDiv.appendChild(validateResult);
        validateDiv.appendChild(document.createElement('br'));
        return;
      }
      sum += valueNum;
    }
    console.log(sum);
    if (sum !== 100) {
      const validateResult = document.createTextNode(`Sorry the addition in row number ${i + 1} is not iqual to 100`);
      validateDiv.appendChild(validateResult);
      validateDiv.appendChild(document.createElement('br'));
      return;
    }
  }
  for (let i = 0; i < yVal; i++) {
    let sumColumn = 0
    let j;
    for (j = 0; j < xVal; j++) {
      let valueColumn = document.querySelector(`.row${j}-column${i}`).value;
      let valueNumColumn = Number(valueColumn);
      if (Number.isInteger(valueNumColumn) !== true) {
        const validateResult = document.createTextNode('Insert only integers please');
        validateDiv.appendChild(validateResult);
        validateDiv.appendChild(document.createElement('br'));
      }
      sumColumn += valueNumColumn;
    }
    console.log(j);
    console.log(sumColumn);
    if (sumColumn !== 100) {
      const validateResult = document.createTextNode(`Sorry the addition in column number ${i +1} is not iqual to 100`);
      validateDiv.appendChild(validateResult);
      validateDiv.appendChild(document.createElement('br'));
      return;
    }
  }
  const validateResult = document.createTextNode(`Congrats. All the rows and columns additions are iqual to 100`);
  validateDiv.appendChild(validateResult);
  validateDiv.appendChild(document.createElement('br'));
});
