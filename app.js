const tableDiv = document.querySelector('.js-table');
const submitBtn = document.querySelector('.js-submit');
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
      const value = document.querySelector('.js-value');
      const plusText = document.createTextNode('+');
      cell.classList.add('table-cell');
      const cellInput = document.createElement('input');
      cell.appendChild(cellInput);
      row.appendChild(cell);
      row.appendChild(plusText);
    }
    const validator = document.createElement('td');
    const validatorText = document.createTextNode(' is equal to 100'+' true');
    validator.appendChild(validatorText);
    row.appendChild(validator);
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  tableDiv.appendChild(tbl);
});
