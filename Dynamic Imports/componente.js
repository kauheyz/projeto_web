class ProductCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const container = document.createElement('div');
        container.setAttribute('class', 'product-container');

        const img = document.createElement('img');
        img.src = this.getAttribute('image');
        img.alt = 'Produto';

        const title = document.createElement('h2');
        title.textContent = this.getAttribute('title');

        const description = document.createElement('p');
        description.textContent = this.getAttribute('description');

        const price = document.createElement('span');
        price.textContent = `Preço: ${this.getAttribute('price')}`;

        const button = document.createElement('button');
        button.textContent = 'Adicionar ao Carrinho';

        container.appendChild(img);
        container.appendChild(title);
        container.appendChild(description);
        container.appendChild(price);
        container.appendChild(button);
        shadow.appendChild(container);

        const style = document.createElement('style');
        style.textContent = `
            .product-container {
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
                height: auto;
                margin-bottom: 20px;
            }

            span {
                color: #0a0a0a;
                font-size: 1.2em;
                margin: 10px 0;
            }

            p {
                font-size: 0.9em;
                color: #555;
                margin-bottom: 20px;
                text-align: justify;
            }

            button {
                background-color: #4caf50;
                color: #fff;
                padding: 10px 20px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }

            button:hover {
                background-color: #45a049;
            }
        `;
        shadow.appendChild(style);
    }
}

customElements.define('product-card', ProductCard);
