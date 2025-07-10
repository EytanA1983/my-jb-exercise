function addIngredient(event) {
    event.preventDefault();

    const ingredient = document.getElementById("ingredient").value.trim();
    const amountStr = document.getElementById("amount").value.trim();

    if (!ingredient || !amountStr) {
        alert("Both fields are required!");
        return;
    }

    const amount = parseFloat(amountStr);

    if (isNaN(amount) || amount <= 0) {
        alert("Amount must be a positive number!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = `Ingredient: ${ingredient}, Amount: ${amount}`;

    document.getElementById("ingredientsList").appendChild(li);

    document.getElementById("ingredient").value = "";
    document.getElementById("amount").value = "";
}
