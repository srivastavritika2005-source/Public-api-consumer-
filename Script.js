fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    const products = document.getElementById("products");
    data.forEach(item => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <h3>${item.title}</h3>
        <p>₹ ${item.price}</p>
      `;
      products.appendChild(div);
    });
  })
  .catch(() => {
    alert("API Error");
  });
