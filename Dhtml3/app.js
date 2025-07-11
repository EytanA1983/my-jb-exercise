let colorCount = 0;

function addColor() {
  const nameInput = document.getElementById('colorName');
  const colorInput = document.getElementById('colorValue');

  
  const name = nameInput.value;
  const color = colorInput.value;

  if (name.length < 3 || name.length > 20) {
    alert("Color name must be between 3 and 20 characters.");
    return;
  }

  const tableBody = document.getElementById('tableBody');

  const newRow = `
    <tr>
      <td>${name}</td>
      <td class="colorCell" style="background-color: ${color};"></td>
    </tr>
  `;

  tableBody.innerHTML += newRow;

  
  colorCount++;
  document.getElementById('colorCount').textContent = `Total Colors: ${colorCount}`;

  nameInput.value = '';
  colorInput.value = '#000000';
}
