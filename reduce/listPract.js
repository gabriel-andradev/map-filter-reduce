const list = [
    {
        name: "sabao em pó",
        preco: 30,
    },
    {
        name: "cereal",
        preco: 15,
    },
    {
        name: "toalha",
        preco: 30,
    },
];

const balanceAv = 100;

function calculateBalance(balanceAv, list) {
    return list.reduce(function (prev, current, index) {
        console.log("rodada", index + 1);
        console.log(prev);
        console.log(current);
        return prev - current.preco;
    }, balanceAv);
}

console.log(calculateBalance(balanceAv, list));