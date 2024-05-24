document.getElementById('fruits').addEventListener('click', function() {
    toggleContent('fruits');
  });
  
  document.getElementById('vegetables').addEventListener('click', function() {
    toggleContent('vegetables');
  });
  
  function toggleContent(id) {
    var content = document.getElementById(id).getElementsByClassName('content')[0];
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  }








  function showForm(item, price) {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('selected-item').value = item; 
    document.getElementById('price-per-kg').value = "$" + price + "/kg"; 
    document.getElementById('item-form').setAttribute('data-item', item);
}

document.getElementById('item-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var item = this.getAttribute('data-item');
    var quantity = parseFloat(document.getElementById('quantity').value);
    console.log('Añadir al carrito: ' + quantity + ' kg de ' + item);
    // Aquí puedes agregar la lógica para añadir el artículo al carrito
    document.getElementById('form-container').style.display = 'none';
});












function addToCart(item, quantity, pricePerKg) {
    // Calcula el precio total del artículo
    var totalPrice = quantity * pricePerKg;
    
    // Crear un elemento de lista para mostrar el artículo en el carrito
    var listItem = document.createElement('li');
    listItem.textContent = quantity + ' kg de ' + item + ' - Total: $' + totalPrice.toFixed(2);
    
    // Agregar el elemento de lista al elemento <ul> del carrito
    document.getElementById('lista-carrito').appendChild(listItem);
    
    // Actualizar el costo total de la compra
    updateTotal();
}

// Función para actualizar el costo total de la compra
function updateTotal() {
    var total = 0;
    var items = document.querySelectorAll('#lista-carrito li');
    items.forEach(function(item) {
        var itemText = item.textContent;
        var itemTotal = parseFloat(itemText.split('-')[1].trim().slice(8));
        total += itemTotal;
    });
    
    // Mostrar el costo total en el HTML
    document.getElementById('total').textContent = '$' + total.toFixed(2);
}

// Ejemplo de cómo llamar a la función addToCart
// Debes llamar a esta función cuando se añada un artículo al carrito
// Por ejemplo, dentro de la función que maneja el evento de enviar el formulario
//addToCart('Manzana', 2, 750); // Ejemplo de uso