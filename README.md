## AttachmentFiles

Para consegui pegar todos os anexos dos items da nossa lista com pnp, precisamos da um **select** no field  ```AttachmentFiles``` e realizar um ```expand('AttachmentFiles')``` para obter os anexos.

```

function getItem(){
    
    $pnp.sp.web.lists.getByTitle("Atividades")
    .items
    .select("*", "AttachmentFiles", "Lista/Title", "Lista/Id")
    .expand("Lista", "AttachmentFiles")
    .top(2)
    .getPaged()
    .then(function(res){

        console.log(res);

        _paged = res;
        
        
        var html;

        res.results.map(function(value){
        
            html += `<tr><td>${value.Id}</td><td>${value.Title}</td>           
            <td>${value.Lista === undefined ? "" : value.Lista.Title}</td> 
            <td>`;


            if(value.Attachments){
                value.AttachmentFiles.map(function(att){

                    html+= `<a href="${att.ServerRelativeUrl}">${att.FileName}</a>`;

                })
            }else{
                html+="Sem anexos..."
            }


            html+=`</td>
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

