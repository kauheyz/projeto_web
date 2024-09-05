class ProductCard extends HTMLElement {
    static get observedAttributes() {
      return ['image', 'title', 'description', 'price', 'id'];
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          .card {
            width: 100%;
            background-color: #fff;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          img {
            max-width: 100%;
            border-radius: 8px;
          }
          .price {
            color: #e74c3c;
            font-size: 1.2em;
            margin-top: 10px;
          }
          .link {
            color: #3498db;
            text-decoration: none;
          }
        </style>
        <div class="card">
          <img id="image" />
          <h2 id="title"></h2>
          <p id="description"></p>
          <div class="price" id="price"></div>
          <a class="link" id="link">Ver Detalhes</a>
        </div>
      `;
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'image') {
        this.shadowRoot.getElementById('image').src = newValue;
      }
      if (name === 'title') {
        this.shadowRoot.getElementById('title').textContent = newValue;
      }
      if (name === 'description') {
        this.shadowRoot.getElementById('description').textContent = newValue;
      }
      if (name === 'price') {
        this.shadowRoot.getElementById('price').textContent = newValue;
      }
      if (name === 'id') {
        this.shadowRoot.getElementById('link').href = `product.html?id=${newValue}`;
      }
    }
  }
  
  customElements.define('product-card', ProductCard);
  
  document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => {
        const container = document.body;
        data.products.forEach(product => {
          const card = document.createElement('product-card');
          card.setAttribute('image', product.image);
          card.setAttribute('title', product.title);
          card.setAttribute('description', product.description);
          card.setAttribute('price', product.price);
          card.setAttribute('id', product.id);
          container.appendChild(card);
        });
      });
  });  