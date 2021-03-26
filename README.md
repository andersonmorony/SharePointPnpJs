## Get Paged

Para consegui realizar uma paginação na lista com pnp, precisamos chamar função ```top(10).getPaged()``` antes de chamar o then.

```

function getItem(){
    
    $pnp.sp.web.lists.getByTitle("Atividades")
    .items
    .select("Title", "Id", "Lista/Title", "Lista/Id")
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
```

A função retornará um objeto com as propriedades ```hasNext```, ```result``` e uma função para realizar a consulta nos próximos itens da lista, que é o ```getNext()```

```
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
```
