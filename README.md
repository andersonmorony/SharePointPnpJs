# SharePoint - Manipulando campo Lookup
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


Alteração na function de edit para podemos realizar o update no campo lookup.
Adicionando o campo ListaId.

<i>Sempre que criamos um campo lookup, o sharepoint cria automaticamente o campoId, ou seja, se o nome do campo que criamos fosse "atividades", o sharepoint irá criar
o campo "atividadesId" e e justamente esse campo que precisamos realizar o update. conforme exemplo abaixo.</i>

```
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
```
