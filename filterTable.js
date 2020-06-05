function getAllOrdersClient() {

    clearFilterTable(orders);
}

function getAllOrdersExtra() {
    let extra = getExtraArray();
    clearFilterTable(extra)
}

function getAllOrdersNormal() {
    let normal = getNormalArray();
    clearFilterTable(normal);
}

function clearFilterTable(client) {
    $("#activeOrders tbody tr").remove();

    client.forEach(order => {

        $("#activeOrders tbody").append(`<tr>  <td> ${order.id} </td> <td > ${order.nome} </td> <td> </td>    </tr>`);
        getAllItems(order);
    })
}

function getAllItems(order) {


    order.escolha.forEach(food => {
        $("#activeOrders tbody tr td").last().append(`  ${food.item} - ${food.extra} <br>  `);
    });
}

$("#filterOrders").change(function () {
    let value = $(this).val();
    if (value == "all") {
        return getAllOrdersClient();
    }
    if(value == "extra"){
        return getAllOrdersExtra();
    }

    return getAllOrdersNormal();

})