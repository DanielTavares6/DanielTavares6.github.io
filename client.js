//Insert data into selects
function loadSandes() {
    genericLoad(productNameSanduichesList, "items");
    $("#extra").append(`<option> Normal </option>`);
    genericLoad(productExtraSanduichesList, "extra");
}

function loadAcomp() {
    genericLoad(productNameAcompanhamentosList, "items");
    $("#extra").append(`<option> Normal </option>`);
}

function loadBebida() {
    genericLoad(productNameBebidasList, "items");
    $("#extra").append(`<option> Normal </option>`);
    genericLoad(productExtraBebidasList, "extra");
}

function genericLoad(array, option) {
    array.forEach(element => {
        $(`#${option}`).append(`<option> ${element} </option>`);

    });
}


function change(value) {
    switch (value) {
        case 'Sandes':
            removeOptions();
            loadSandes();
            break;

        case 'Acomp':
            removeOptions();
            loadAcomp();
            break;

        case 'Bebida':
            removeOptions();
            loadBebida();
            break;
    }

}

function removeOptions() {
    $("#items option").remove();
    $("#extra option").remove();

}


function add() {
    let item = $("#items").val();
    let extra = $("#extra").val();
    prod = new Product(item, extra);
    items.push(prod);
    addToTable(prod);
}


function addToTable(items) {
    $("#orderTable tbody").append(`<tr> <td> <button class="btn btn-danger" onclick="removeItem(this,items)">X</button> </td> <td> ${items.item} </td> <td> ${items.extra} </td> </tr>`);
}


function removeItem(el, prod) {
    $(el).closest('tr').remove();

    for (let i = 0; i < items.length; i++) {

        if (this.prod.item == items[i].item && prod.extra == this.items[i].extra) {
            items.splice(i - 1, 1);
            break;
        }
    }



}



///submit order
$("#orderBtn").click(() => {
    let name = $("#client-name").val();

    if (name != "") {
        $("#warningNoName").addClass("d-none");
    }
    else {
        $("#warningNoName").removeClass("d-none");
    }
    if (items.length != 0) {
        $("#warningNoItems").addClass("d-none");
    }
    else {
        $("#warningNoItems").removeClass("d-none");
    }
    if (items.length != 0 && name != "") {
        let tempID = new Date();

        order = new Order(items, name, tempID.getTime());
        orders.push(order);
        getDataOrders();
        getAllOrdersClient();
        clearTable();
        items = [];
        return;
    }
})

function clearTable() {
    $("#itemForm").trigger("reset");
    $("#orderTable tbody tr").remove();
}