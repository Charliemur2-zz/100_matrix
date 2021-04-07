const tableDiv = document.querySelector('.js-table');
const submitBtn = document.querySelector('.js-submit');
const validateDiv = document.querySelector('.js-validation');
submitBtn.addEventListener('click', function() {
  const tbl = document.createElement('table');
  const tblBody = document.createElement('tbody');
  const xVal = document.querySelector('.js-x').value;
  const yVal = document.querySelector('.js-y').value;

  for (let i = 0; i < xVal; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < yVal; j++) {
      const cell = document.createElement('td');
      cell.classList.add('js-value');
      const plusText = document.createTextNode('+');
      cell.classList.add('table-cell');
      const cellInput = document.createElement('input');
      cellInput.classList.add(`row${i}-column${j}`);
      cell.appendChild(cellInput);
      row.appendChild(cell);
      row.appendChild(plusText);
    }
    const validateBtn = document.createElement('button');
    const valBtnText = document.createTextNode('validate');
    validateBtn.appendChild(valBtnText);
    row.appendChild(validateBtn);
    tblBody.appendChild(row);
    validateBtn.addEventListener('click', function() {
      let sum = 0;
      for (let j = 0; j < yVal; j++) {
        let value = document.querySelector(`.row${i}-column${j}`).value;
        let valueNum = Number(value);
        if (Number.isInteger(valueNum) !== true) {
          const validateResult = document.createTextNode('Insert only integers please');
          validateDiv.appendChild(validateResult);
          return;
        }
        sum += valueNum;
      }
      if (sum === 100) {
        const validateResult = document.createTextNode('The addition is equal to 100');
        validateDiv.appendChild(validateResult);
      } else {
        const validateResult = document.createTextNode('The addition is NOT equal to 100');
        validateDiv.appendChild(validateResult);
      }
    });
  }
  tbl.appendChild(tblBody);
  tableDiv.appendChild(tbl);
});
