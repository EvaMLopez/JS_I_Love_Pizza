document.getElementById('addToOrderBtn').addEventListener('click', addToOrder);
document.getElementById('placeOrderBtn').addEventListener('click', placeOrder);
document.getElementById('newOrderBtn').addEventListener('click', resetOrder);

document.getElementById('pizzaSelect').addEventListener('input', showIngredients)

function addToOrder() {
    const pizzaSelect = document.getElementById('pizzaSelect');
    const quantityInput = document.getElementById('quantity');
    const orderList = document.getElementById('orderList');
    const errorMessage = document.getElementById('errorMessage');
    const pizzaName = pizzaSelect.options[pizzaSelect.selectedIndex].value;
    const quantity = parseInt(quantityInput.value);

    if (pizzaName.trim() !== '' && quantity > 0) {
        const listItem = document.createElement('li');
        listItem.textContent = `${quantity} x ${pizzaName}`;
        orderList.appendChild(listItem);
        quantityInput.value = '';
    } else {
        errorMessage.textContent = "Selecciona una pizza y especifica la cantidad mayor que 0.";
    }
}

function placeOrder() {
    const orderDetails = document.getElementById('orderDetails');
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    const newOrderBtn = document.getElementById('newOrderBtn');
    const pizzaCount = document.getElementById('orderList').childElementCount;
    document.getElementById('errorMessage').textContent = '';

    if (pizzaCount > 0) {
        placeOrderBtn.style.display = 'none';

        showOrderStatus("Pedido recibido. ¡Nos ponemos manos a la masa!");
        setTimeout(() => showOrderStatus("Estamos estirando la masa..."), 1500);
        setTimeout(() => showOrderStatus("Estamos añadiendo los ingredientes..."), 2500);
        setTimeout(() => {
            const introText = pizzaCount === 1 ? "Acabamos de introducir tu pizza al horno." : `Acabamos de introducir tus ${pizzaCount} pizzas al horno.`;
            showOrderStatus(introText);
        }, 3500);
        setTimeout(() => {
            const outText = pizzaCount === 1 ? "Acabamos de sacar tu pizza del horno y ¡huele que alimenta! Ya está de camino..." : `Acabamos de sacar tus ${pizzaCount} pizzas del horno y ¡huele que alimenta!. Ya están de camino...`;
            showOrderStatus(outText);
        }, 4500);
        setTimeout(() => {
            showOrderStatus("¡Buen provecha!");
            newOrderBtn.style.display = 'inline';
        }, 5500);
    } else {
        alert("Debes añadir al menos una pizza antes de hacer el pedido.");
    }
}

function showOrderStatus(message) {
    const orderDetails = document.getElementById('orderDetails');
    const statusMessage = document.createElement('p');
    statusMessage.textContent = message;
    orderDetails.appendChild(statusMessage);
}

function resetOrder() {
    location.reload();
}

function showIngredients() {
    const pizzaSelect = document.getElementById('pizzaSelect');
    const ingredientsContainer = document.getElementById('ingredientsContainer');
    const selectedPizza = pizzaSelect.options[pizzaSelect.selectedIndex].value;

    let ingredientsText = '';

    switch (selectedPizza) {
        case 'margarita':
            ingredientsText = 'Ingredientes: salsa de tomate, mozzarella, tomates cherry, albahaca';
            break;
        case 'pepperoni':
            ingredientsText = 'Ingredientes: salsa de tomate, mozzarella fresca de búfala, pepperoni';
            break;
        case 'vegetariana':
            ingredientsText = 'Ingredientes: salsa de tomate, mozzarella, champiñones frescos, cebolla, berenjena, calabacín';
            break;
        default:
            ingredientsText = 'Selecciona una pizza para ver los ingredientes';
            break;
    }

    ingredientsContainer.textContent = ingredientsText;
}

