import Cake1 from '../imgs/pancake.png'
import Cake2 from '../imgs/cake2.png'
import Cake3 from '../imgs/cake3.png'
import Cake4 from '../imgs/birthday cake.png'
import Cake5 from '../imgs/fruitcake.png'
import Cake6 from '../imgs/strawberry crepe cake.png'
import Sandwich1 from '../imgs/Cheeseburger Chicken.png'
import Sandwich2 from '../imgs/ham sandwich.png'
import Sandwich3 from '../imgs/Shawarma Hamburger.png'
import Sandwich4 from '../imgs/Chicago-style pizza.png'
import Sandwich5 from '../imgs/panini.png'
import Sandwich6 from '../imgs/Submarine sandwich.png'
import Cookie1 from '../imgs/cookie1.png'
import Cookie2 from '../imgs/cookie2.png'
import Cookie3 from '../imgs/cookie3.png'
import Bread1 from '../imgs/Baguette.png'
import Bread2 from '../imgs/croissant.png'
import Bread3 from '../imgs/sliced wheat bread.png'
import Bread4 from '../imgs/Croissant Pain au chocolat.png'
import Bread5 from '../imgs/ftoor.png'
import Bread6 from '../imgs/Danish pastry.png'


export default {
  "success": true,
  "data": {
      "cake-products": [
          {
            "id":Math.floor(Math.random()*1000000),
            "name": "pancakes",
            "img": Cake1,
            "price": 8,
            "isLiked": false,
            "isAddedToCard": false
          },
          {
            "id": Math.floor(Math.random()*1000000),
            "name": "Chocolate truffle",
            "img": Cake2,
            "price": 25,
            "isLiked": false,
            "isAddedToCard": false
          },
          {
            "id": Math.floor(Math.random()*1000000),
            "name": "chocolate cupcake",
            "img": Cake3,
            "price": 5,
            "isLiked": false,
            "isAddedToCard": false
          },
          {
            "id": Math.floor(Math.random()*1000000),
            "name": "birthday cake",
            "img": Cake4,
            "price": 30,
            "isLiked": false,
            "isAddedToCard": false
          },
          {
            "id": Math.floor(Math.random()*1000000),
            "name": "Fruit cake",
            "img": Cake5,
            "price": 30,
            "isLiked": false,
            "isAddedToCard": false
          },
          {
            "id": Math.floor(Math.random()*1000000),
            "name": "strawberry crepe cake",
            "img": Cake6,
            "price": 30,
            "isLiked": false,
            "isAddedToCard": false
          },
        ],
        "sandwich-products": [
        {
            "id": Math.floor(Math.random()*1000000),
            "name": "Cheeseburger Chicken",
            "img": Sandwich1,
            "price": 5,
            "isLiked": false,
            "isAddedToCard": false
        },
        {
            "id": Math.floor(Math.random()*1000000),
            "name": "ham sandwich",
            "img": Sandwich2,
            "price": 20,
            "isLiked": false,
            "isAddedToCard": false
        },
        {
            "id": Math.floor(Math.random()*1000000),
            "name": "Shawarma Hamburger",
            "img": Sandwich3,
            "price": 15,
            "isLiked": false,
            "isAddedToCard": false
        },
        {
          "id": Math.floor(Math.random()*1000000),
          "name": "Chicago-style pizza",
          "img": Sandwich4,
          "price": 25,
          "isLiked": false,
          "isAddedToCard": false
      },
      {
        "id": Math.floor(Math.random()*1000000),
        "name": "panini",
        "img": Sandwich5,
        "price": 15,
        "isLiked": false,
        "isAddedToCard": false
      },
      {
        "id": Math.floor(Math.random()*1000000),
        "name": "Submarine sandwich",
        "img": Sandwich6,
        "price": 35,
        "isLiked": false,
        "isAddedToCard": false
      },
      ],
      "cookies-products": [
        {
            "id": Math.floor(Math.random()*1000000),
            "name": "Forest gateau Puff pastry",
            "img": Cookie1,
            "price": 5,
            "isLiked": false,
            "isAddedToCard": false
        },
        {
            "id": Math.floor(Math.random()*1000000),
            "name": "Cinnamon roll",
            "img": Cookie2,
            "price": 5,
            "isLiked": false,
            "isAddedToCard": false
        },
        {
            "id": Math.floor(Math.random()*1000000),
            "name": "Cherry pie",
            "img": Cookie3,
            "price": 5,
            "isLiked": false,
            "isAddedToCard": false
        },
      ],
      "bread-products": [
        {
            "id": Math.floor(Math.random()*1000000),
            "name": "Baguette",
            "img": Bread1,
            "price": 1.5,
            "isLiked": false,
            "isAddedToCard": false
        },
        {
            "id": Math.floor(Math.random()*1000000),
            "name": "Croissant",
            "img": Bread2,
            "price": 5,
            "isLiked": false,
            "isAddedToCard": false
        },
        {
            "id": Math.floor(Math.random()*1000000),
            "name": "sliced wheat bread",
            "img": Bread3,
            "price": 5,
            "isLiked": false,
            "isAddedToCard": false
        },
        {
          "id": Math.floor(Math.random()*1000000),
          "name": "Croissant Pain au chocolat",
          "img": Bread4,
          "price": 3,
          "isLiked": false,
          "isAddedToCard": false
      },
      {
        "id": Math.floor(Math.random()*1000000),
        "name": "FTOOR",
        "img": Bread5,
        "price": 15,
        "isLiked": false,
        "isAddedToCard": false
      },
      {
        "id": Math.floor(Math.random()*1000000),
        "name": "Danish pastry",
        "img": Bread6,
        "price": 5,
        "isLiked": false,
        "isAddedToCard": false
      },
      ]
  }
}