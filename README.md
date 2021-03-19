## CamlQuery com campo lookup

Para realizar consultas utilizando camlquery vamos iremos utilizar a função abaixo.

mas caso em nossa lista tenha algum campo lookup, precisaremos adicionar um paramentro na função 
```.getItemsByCAMLQuery(camlquery, "FieldValuesAsText")``` ou utilizar a função ```renderListDataAsStream(camlquery)``` 

```
function getItem(){

    const camlquery = {
        ViewXml: "<View><ViewFields><FieldRef Name='ID' /><FieldRef Name='Title' /><FieldRef Name='Lista' /></ViewFields><Query><OrderBy><FieldRef Name='Title' /></OrderBy></Query><RowLimit>10</RowLimit></View>"
    }
    
    $pnp.sp.web.lists.getByTitle("Atividades")
    .renderListDataAsStream(camlquery)
    // .getItemsByCAMLQuery(camlquery, "FieldValuesAsText")
    // .items
    // .select("Title", "Id", "Lista/Title", "Lista/Id")
    // // .filter("Title eq 'Anderson'")
    // .expand("Lista")
    // .top(5)
    // .get()
    .then(function(res){

        console.log(res);
        
        var html;

        res.map(function(value){
        
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
