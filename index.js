const express = require("express");
const app = express();

app.use(express.json());

const pizzas = require ('./database/pizzas.json');

const listarTodasAsPizzas = () => {
    let conteudo = "";

    pizzas.forEach((pizza) => {
        conteudo += `
        id: ${pizza.id}
        sabor: ${pizza.sabor}
        categoria: ${pizza.categoria}
        preco: ${pizza.preco}
        `
    });
    return conteudo;
};

app.get("/pizzas", (req , res) => {
    return res.json(pizzas);
})

const adicionarPizza = function (sabor, categoria, preco) {
    const pizzaNova = {
        id: pizzas[pizzas.length-1].id + 1,
       sabor,
       categoria,
       preco
    };

    pizzas.push(pizzaNova);
    console.log(`a pizza de ${sabor} foi adicionada com sucesso`);

};

console.log(listarTodasAsPizzas());


const procurarPizzaPeloNome = function (nomePizza){
   const pizzaEncontrada = pizzas.find((pizza) => pizza.sabor == nomePizza);

if(!pizzaEncontrada) return `a pizza sabor ${nomePizza} não foi encontrada`;

return pizzaEncontrada
};
console.log(procurarPizzaPeloNome("calabresa"));

app.listen(3000, () => console.log("o servidor ta on!"));
