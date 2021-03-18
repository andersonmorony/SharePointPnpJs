# SharePoint Pnp Js
Nessa branch, você terá acesso a todo o código fonte da nossa aula de como manipular os campos lookup



Função utilizada para realizar o get na minha lista lookup para preencher o option do campo select, adicionado no nosso modal.
```
function getLookup(){
    $pnp.sp.web.lists.getByTitle("MinhaLista").items.getAll().then(function(res){


        res.map(function(item){
            $("#lookup").append(`<option value="${item.Id}">${item.Title}</option>`)
        })


    });
}
```
