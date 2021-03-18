## SharePoint - Usando Filter, Select, Expand Lookup com PNP JS

Nesse vídeo aprendemos como adicionar o select, filter e realizar consulta em campos lookup.


- Select - Com a funcção select, podemos retornar apenas os campos desejados de nossa lista do SharePoint
- Filter - Com o filter podemos realizar consultas com condições para retornar apenas o que se encaixa com o filtro.
- Expand - Com o expand podemos expandir literalmente os dados de nossa coluna lookup e visualizar todas as colunas.

```
function getItem(){
    $pnp.sp.web.lists.getByTitle("Atividades").items
    .select("Title", "Id", "Lista/Title", "Lista/Id")
    .filter("Title eq 'Anderson'")
    .expand("Lista")
    .get().then(function(res){

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
