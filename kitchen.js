function changeBgButtons(element){
    $(".kitchenDiv").css("background-color","#007bff");
    $(element).css("background-color","#163f82");
    
}

function getDataOrders() {
    let firstOrder = orders;
    currentFilter = "All"
    if (firstOrder.length != 0) {
        $("#kitchenBtn").css("visibility","visible");
        return setNameId(firstOrder);
    }
    $("#kitchenBtn").css("visibility","hidden");
    emptyKitchenTable();

}

function getDataOrdersExtra() {
    let firstOrder = getExtraArray();
    currentFilter = "Extra";
    if (firstOrder.length != 0) {
        $("#kitchenBtn").css("visibility","visible");
        return setNameId(firstOrder);
    }
    $("#kitchenBtn").css("visibility","hidden");
    emptyKitchenTable();


}

function getDataOrdersNormal() {
    let firstOrder = getNormalArray();
    currentFilter = "Normal";
    if (firstOrder.length != 0) {
        $("#kitchenBtn").css("visibility","visible");
        return setNameId(firstOrder);
    }
    $("#kitchenBtn").css("visibility","hidden");
    emptyKitchenTable();

}

function setNameId(order) {
    $("#spanNome").html(order[0].nome);
    $("#spanId").html(order[0].id);
    clearKitchenTable(order[0].escolha);
}

function clearKitchenTable(client) {
    $("#kitchenTable tbody tr").remove();
    client.forEach(order => {
        $("#kitchenTable tbody").append(`<tr>  <td> ${order.item} </td> <td> ${order.extra} </td> </tr>`);

    })
    getCount();
}

function emptyKitchenTable() {
    $("#spanNome").html("Nenhum dado a apresentar");
    $("#spanId").html("Nenhum dado a apresentar");
    $("#kitchenTable tbody tr").remove();
}

function getCount() {

    let numberTotalOrders = orders.length;
    let numberTotalExtra;
    let numberTotalNormal;

    //Total Extra
    numberTotalExtra = getExtraArray().length;

    //Total Normal
    numberTotalNormal = getNormalArray().length;


    let totalCounter = document.getElementById("allOrders");
    let totalExtra = document.getElementById("allExtra");
    let totalNormal = document.getElementById("allNormal");

    totalCounter.innerHTML = numberTotalOrders;
    totalExtra.innerHTML = numberTotalExtra;
    totalNormal.innerHTML = numberTotalNormal;

}

function getExtraArray() {
    let tempExtra = [];
    orders.map(order => {

        return order.escolha.some(value => {

            return value.extra != "Normal" ? tempExtra.push(order) : "";
        })

    })
    return tempExtra;
}

function getNormalArray() {
    let tempNormal = [];

    orders.map(order => {
        let temp = order.escolha.every(value => {
            return value.extra == "Normal";
        })
        if (temp) {
            tempNormal.push(order);
        }


    })
    return tempNormal;
}


function orderDone() {
    let id = $("#spanId").html();
    removeOrders(id);
    if (currentFilter == "Normal") {

        getDataOrdersNormal();
        getAllOrdersNormal();
    }
    else if (currentFilter == "Extra") {

        getDataOrdersExtra();
        getAllOrdersClient();
    }
    else {
        getDataOrders();
        getAllOrdersClient();

    }
    getCount();
}

function removeOrders(id) {
    orders.map((client, index) => {
        if (client.id == id) {
            orders.splice(index, 1);
        }
    })
}