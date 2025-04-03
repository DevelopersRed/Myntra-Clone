let itemContainerElement = document.querySelector('.items-container');
displayItems();

let bagItems = [];

function addToBag(item){
        bagItems.push(item);
        displayBagIcon ();
}
function displayBagIcon () {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    
    bagItemCountElement.innerText = bagItems.length;
    
}
function displayItems(){
    let item =[
        {
        id: '001',
        item_image: 'images/categories2.jpg',
        rating : {
            start: 4.5,
            end : 7800,
        },
        company: "DressBerry",
        item_name: "Women Analogue Watch",
        current_price: 824,
        original_price: 3299,
        discount_price: 75,
    },
    {
        id: '002',
        item_image: 'images/categories2.jpg',
        rating : {
            start: 4.5,
            end : 7800,
        },
        company: "DressBerry",
        item_name: "Women Analogue Watch",
        current_price: 824,
        original_price: 3299,
        discount_price: 75,
    },
    {
        id: '003',
        item_image: 'images/categories2.jpg',
        rating : {
            start: 4.5,
            end : 7800,
        },
        company: "DressBerry",
        item_name: "Women Analogue Watch",
        current_price: 824,
        original_price: 3299,
        discount_price: 75,
    },
    {
        id: '004',
        item_image: 'images/categories2.jpg',
        rating : {
            start: 4.5,
            end : 7800,
        },
        company: "DressBerry",
        item_name: "Women Analogue Watch",
        current_price: 824,
        original_price: 3299,
        discount_price: 75,
    },
    {
        id: '005',
        item_image: 'images/categories2.jpg',
        rating : {
            start: 4.5,
            end : 7800,
        },
        company: "DressBerry",
        item_name: "Women Analogue Watch",
        current_price: 824,
        original_price: 3299,
        discount_price: 75,
    },
    {
        id: '006',
        item_image: 'images/categories2.jpg',
        rating : {
            start: 4.5,
            end : 7800,
        },
        company: "DressBerry",
        item_name: "Women Analogue Watch",
        current_price: 824,
        original_price: 3299,
        discount_price: 75,
    },
    {
        id: '007',
        item_image: 'images/categories2.jpg',
        rating : {
            start: 4.5,
            end : 7800,
        },
        company: "DressBerry",
        item_name: "Women Analogue Watch",
        current_price: 824,
        original_price: 3299,
        discount_price: 75,
    },
    ]
    let innerHTML = ""
    item.forEach(item => {
        innerHTML += `  <div class="item-container">
                    <img class="item-image" src="${item.item_image}" alt="item-image">
                    <div class="rating">${item.rating.start}⭐ ${item.rating.end} </div>
                    <div class="company">${item.company}</div>
                    <div class="item-name">${item.item_name}</div>
                    <div class="price">
                        <span class="current-price">${item.current_price}</span>
                        <span class="original-price">Rs.${item.original_price}</span>
                        <span class="discount-price">(${item.discount_price}% OFF)</span>
                    </div>
                    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to bag</button>
                </div>`
    });
    itemContainerElement.innerHTML = innerHTML
}

