// ITERATION 1

// js/index.js


function updateSubtotal(product) {
  //constante para seleccionar el precio del producto
  const price = parseFloat(product.querySelector(".price span").innerHTML);
  //constante para la cantidad de ese producto
  const quantity = parseFloat(product.querySelector(".quantity input").value);
  //subtotal = precio*cantidad
  const subTotal = price*quantity;
  //seleccionar casilla del subtotal para pintar el resultado
  const subTotalcell = product.querySelector(".subtotal span");
  subTotalcell.innerHTML = subTotal;
  return subTotal; 
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test 
  const allProducts = document.getElementsByClassName("product");
  let sum = 0;
  [...allProducts].forEach( (el) => {
   sum += updateSubtotal(el);
  })
// ITERATION 3
  let total = document.querySelector("#total-value span");
  total.innerHTML = sum;
  }

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  //elemento padre del button:
  const parentBtn = target.parentNode;
  //abuelo del button, que queremos eliminar, o sea el producto:
  const productRmv = parentBtn.parentNode;
  //elemento padre del producto:
  const container = productRmv.parentNode;
  container.removeChild(productRmv)
  //se actualiza el total llamando a la funcion calculateAll()
  calculateAll();
}

// ITERATION 5

function createProduct() {
  let newName = parseFloat(document.querySelector(".new-product-name").value);
  let newPrice = parseFloat(document.querySelector(".new-product-price").value);
  //selecciono el elemento tabla
  let table = document.querySelector("tbody");
  //selecciono la fila para copiar:
  let rowToClone = document.querySelector(".product");
  //creo el clon de la fila .product
  let clone = rowToClone.cloneNode(true);
  //cambio el nombre del producto:
  clone.querySelector(".name").innerText = newName;
  clone.querySelector(".price span").innerHTML = newPrice;
  //añado el evento del boton remove al boton nuevo
  clone.querySelector(".btn-remove").addEventListener("click", removeProduct);
  table.appendChild(clone);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //boton de borrar
  const removeBtns = document.getElementsByClassName("btn btn-remove");
  [...removeBtns].forEach( (btn) => {
    btn.addEventListener("click", removeProduct)
  })
  const createBtn = document.getElementById("create");
  createBtn.addEventListener("click", createProduct);
  
  

  //... your code goes here
});
