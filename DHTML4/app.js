let imageCount = 0;

function addImage(event) {
  event.preventDefault();
  const descInput = document.getElementById("description");
  const urlInput = document.getElementById("url");

  const desc = descInput.value;
  const url = urlInput.value;

  const tableBody = document.getElementById("tableBody");

  const rowHTML = `
    <tr>
      <td>${desc}</td>
      <td><img src="${url}" id="image-${imageCount + 1}" class="imageCell"></td>
    </tr>
  `;
  
  tableBody.innerHTML += rowHTML;

  imageCount++;
  document.getElementById("imageCount").textContent = `Total Images: ${imageCount}`;

}
