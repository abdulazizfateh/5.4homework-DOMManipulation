// COLOR CONFIGURATION
const colorSelectedImgEl = document.querySelector(".color_selected_img img");
const changeColor = (path) => {
    colorSelectedImgEl.src = path;
}




// TABLE
const tBodyEl = document.querySelector("tbody");

let item = 0;
let count = 0;
let arr = [];

const addNewData = (data) => {
    count++;

    if (count > 9) {
        return null;
    }
    const product = data[item];
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${product.date}</td>
        <td>${product.orderId}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.quantity}</td>
        <td>${product.getTotal()}</td>
    `;
    item++;
    tBodyEl.appendChild(newRow);
    arr.push(newRow);
}

const delData = (arr) => {
    if (arr.length > 0) {
        const lastRow = arr.pop();
        tBodyEl.removeChild(lastRow);
        count = 0;
        item = 0;
    }
}


const data = [
    product1 = {
        date: "20.03.2024",
        orderId: 200330,
        name: "Laptop Holder",
        price: "34.00",
        quantity: 4,
        getTotal() {
            return `$${Number(this.price * this.quantity)}.00`;
        }
    },
    product2 = {
        date: "11.03.2024",
        orderId: 209030,
        name: "Mouse",
        price: "12.00",
        quantity: 1,
        getTotal() {
            return `$${Number(this.price * this.quantity)}.00`;
        }
    },
    product3 = {
        date: "13.08.2024",
        orderId: 233039,
        name: "Shampoo",
        price: "8.00",
        quantity: 2,
        getTotal() {
            return `$${Number(this.price * this.quantity)}.00`;
        }
    },
    product4 = {
        date: "22.12.2024",
        orderId: 456544,
        name: "Watch",
        price: "10.00",
        quantity: 2,
        getTotal() {
            return `$${Number(this.price * this.quantity)}.00`;
        }
    },
    product5 = {
        date: "01.03.2024",
        orderId: 948576,
        name: "Sneakers",
        price: "30.00",
        quantity: 5,
        getTotal() {
            return `$${Number(this.price * this.quantity)}.00`;
        }
    },
    product6 = {
        date: "10.01.2024",
        orderId: 984756,
        name: "Airpods",
        price: "216.00",
        quantity: 1,
        getTotal() {
            return `$${Number(this.price * this.quantity)}.00`;
        }
    },
    product7 = {
        date: "11.02.2024",
        orderId: 234753,
        name: "Keyboard",
        price: "20.00",
        quantity: 10,
        getTotal() {
            return `$${Number(this.price * this.quantity)}.00`;
        }
    },
    product8 = {
        date: "20.02.2024",
        orderId: 343345,
        name: "Glass",
        price: "13.00",
        quantity: 2,
        getTotal() {
            return `$${Number(this.price * this.quantity)}.00`;
        }
    },
    product9 = {
        date: "16.04.2024",
        orderId: 876543,
        name: "Pants",
        price: "36.00",
        quantity: 4,
        getTotal() {
            return `$${Number(this.price * this.quantity)}.00`;
        }
    }
]




// USER CARD
const userCardEl = document.querySelector(".user_card");

userCardEl.addEventListener("click", () => {
    userCardEl.classList.toggle("resize");
    console.log(10);

}) 