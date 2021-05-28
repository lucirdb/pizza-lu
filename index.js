const pizzas = [
    {
        id: 1,
        sabor: "calabresa",
        categoria: "salgada",
        preco: 15.89
    },
    {
        id: 2,
        sabor: "brócolis",
        categoria: "salgada",
        preco: 20.00
    },
    {
        id: 3,
        sabor: "rúcula com tomate seco",
        categoria: "salgada",
        preco: 19.00
    },
    {
        id: 4,
        sabor: "morango com nutella",
        categoria: "doce",
        preco: 25.00
    }
];

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

adicionarPizza("Presunto", "salgado", 25);
adicionarPizza("chocolate e confete", "doce", 35);

console.log(listarTodasAsPizzas());


const procurarPizzaPeloNome = function (nomePizza){
   const pizzaEncontrada = pizzas.find((pizza) => pizza.sabor == nomePizza);

if(!pizzaEncontrada) return `a pizza sabor ${nomePizza} não foi encontrada`;

return pizzaEncontrada
};
console.log(procurarPizzaPeloNome("calabresa"));
