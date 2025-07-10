document.getElementById("changeBtn").addEventListener("click", function () {
    // קבלת ערכי האינפוטים
    const bgColor = document.getElementById("bgColorInput").value;
    const newText = document.getElementById("textInput").value;

    // שינוי צבע הרקע של body
    document.body.style.backgroundColor = bgColor;

    // שינוי הטקסט של הפסקה
    document.getElementById("myParagraph").textContent = newText;
});