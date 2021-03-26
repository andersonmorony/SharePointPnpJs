$(document).ready(function(){

    var _paged;

    getItem();
    getLookup();
    

    $("#btn-salvar").click(function(){

        var title = $("#Title").val();

        addItem({
            Title: title
        });
    });
    
    $("#btn-edit").click(function(){
        
        editItem({
            Id: $("#idItem").val(),
            Title: $("#TitleEdit").val(),
            idLookup: $("#lookup").val()
        });
    });

    $(document).on("click", "#btn-get" ,function(){
        
        var Id = $(this).data("id");

        getItemById(Id);
        
    });

    $(document).on("click", "#btn-delete" ,function(){
        
        var Id = $(this).data("id");

        deleteItem(Id);
        
    });

});

function getItemById(id){
    $pnp.sp.web.lists.getByTitle("Atividades").items.getById(id).get().then(function(res){
        
        $("#idItem").val(res.Id);
        $("#TitleEdit").val(res.Title);

    }).catch(function(err){
        console.log(err);

    });
}

function getItem(){

    const camlquery = {
        ViewXml: "<View><ViewFields><FieldRef Name='ID' /><FieldRef Name='Title' /><FieldRef Name='Lista' /></ViewFields><Query><OrderBy><FieldRef Name='Title' /></OrderBy></Query><RowLimit>10</RowLimit></View>"
    }
    
    $pnp.sp.web.lists.getByTitle("Atividades")
    // .renderListDataAsStream(camlquery)
    // .getItemsByCAMLQuery(camlquery, "FieldValuesAsText")
    .items
    .select("Title", "Id", "Lista/Title", "Lista/Id")
    // .filter("Title eq 'Anderson'")
    .expand("Lista")
    .top(2)
    .getPaged()
    .then(function(res){

        console.log(res);

        _paged = res;
        
        
        var html;

        res.results.map(function(value){
        
            html += `<tr><td>${value.Id}</td><td>${value.Title}</td>           
            <td>${value.Lista === undefined ? "" : value.Lista.Title}</td> 
            <td>
            <button type="button" id="btn-get" data-id="${value.Id}" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Edit
            </button>
            <button type="button" class="btn btn-danger" data-id="${value.Id}" id="btn-delete">Delete</button>

            </td>
            </tr>`;

        })

        $("#mytable").html(html);



    }).catch(function(err){
        console.log(err)
    })
}


function addItem(item){
    $pnp.sp.web.lists.getByTitle("Atividades").items.add({
        Title: item.Title
    }).then(function(res){
        getItem();
    });
}

function editItem(item){
    $pnp.sp.web.lists.getByTitle("Atividades").items.getById(item.Id).update({
        Title: item.Title,
        ListaId: item.idLookup
    }).then(function(resp){
        getItem();
    }).catch(function(err){
        console.log(err);
    })
}

function deleteItem(id){
    $pnp.sp.web.lists.getByTitle("Atividades").items.getById(id).delete().then(function(res){
        console.log(res);
        alert("Item deletado");
        getItem();
    }).catch(function(err){
        console.log(err);
    })
}

function getLookup(){
    $pnp.sp.web.lists.getByTitle("MinhaLista").items.getAll().then(function(res){


        res.map(function(item){
            $("#lookup").append(`<option value="${item.Id}">${item.Title}</option>`)
        })


    });
}

function getpaged(page)
{
    if(page.hasNext){
        page.getNext().then(function(res){

            _paged = res;
            console.log(res);
            
        var html;

        res.results.map(function(value){
        
            html += `<tr><td>${value.Id}</td><td>${value.Title}</td>           
            <td>${value.Lista === undefined ? "" : value.Lista.Title}</td> 
            <td>
            <button type="button" id="btn-get" data-id="${value.Id}" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Edit
            </button>
            <button type="button" class="btn btn-danger" data-id="${value.Id}" id="btn-delete">Delete</button>

            </td>
            </tr>`;

        })

        $("#mytable").append(html);


        _paged.hasNext ? $("#btn-load").css({display: "block"}) : $("#btn-load").css({display: "none"})

        });
    }
}