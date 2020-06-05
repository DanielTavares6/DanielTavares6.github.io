class Product{


    constructor(item,extra){
        this.item = item;
        this.extra = extra;
    }


    
} 

class Order {
    constructor(escolha,nome, id){
        this.escolha = escolha;
        this.nome = nome;
        this.id = id;
    }
}

let items = [];
let orders = [];
let currentFilter = "All";


function loadData() {
    loadSandes();
    getAllOrdersClient();
}



const productNameSanduichesList = [
    "Big Mac®",
    "Big Tasty®",
    "CBO®",
    "Filet-o-Fish®",
    "McVeggie",
    "Double Cheeseburger"
]

const productExtraSanduichesList = [
    "Sem Molhos",
    "Sem Ketchup",
    "Sem Pickle"
]

const productNameAcompanhamentosList = [
    "Batata",
    "Batata (grande)",
    "Sopa",
    "Salada"
]

const productNameBebidasList = [
    "Agua",
    "Compal",
    "Ice Tea",
    "Fanta",
    "Coca-Cola"
]

const productExtraBebidasList = [
    "Natural",
    "Com Gelo"
]