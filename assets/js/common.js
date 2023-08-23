function getWarehouse($warehouse){
    
    let token = sessionStorage.getItem("token")
    $.ajax({
        url: `${baseUrl}/api/Product/GetWarehouse`,
        type: 'GET',
        dataType: 'json',
        contentType:'application/json',
        async:true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Authorization": token
        }
    }).done(function(res) {
        console.log(res)
        if(res.statusCode==200){
            let items = res.data
            $.each(items, function (i, item) {
                $warehouse.append($('<option>', { 
                    value: item.warehouseCode,
                    text : item.warehouseName 
                }));
            });
        }
        
    }).fail(function(res) {
        console.log(res)
    })
}