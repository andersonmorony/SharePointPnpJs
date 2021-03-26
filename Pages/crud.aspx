<%@ Page Language="C#" masterpagefile="~masterurl/custom.master" title="1 sem título" inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register tagprefix="SharePoint" namespace="Microsoft.SharePoint.WebControls" assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content id="Content1" runat="Server" contentplaceholderid="PlaceHolderMain">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

<div class="container">
    <div class="col-6">
        <form action="">
            <div class="row">
                <input class="col-4 form-control" id="Title" type="text">
                <button id="btn-salvar" class="btn btn-success btn-sm" type="button">Salvar</button>
            </div>
        </form>
    </div>
    <table class="table table-striped">
        <thead>
            <th>ID</th>
            <th>Titulo</th>
            <th>Lookup</th>
            <th>Acoes</th>
        </thead>
        <tbody id="mytable">
            <tr>
                <td>Teste</td>
            </tr>
        </tbody>
    </table>
    <div class="container">
        <button id="btn-load" onclick="getpaged(_paged)" class="btn btn-block btn-light" type="button">Carregar mais</button>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
            <div class="form-group">
                <label for="">Title</label>
                <input type="hidden" class="form-control" name="Title" id="idItem">
                <input type="text" class="form-control" name="Title" id="TitleEdit">
                <select class="form-control" name="lookup" id="lookup">
                    
                </select>
            </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" id="btn-edit" class="btn btn-success">Save changes</button>
            </div>
        </div>
        </div>
    </div>

    <script src="/sites/angularjs/style library/custom/myapp/pnp.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    <script src="/sites/angularjs/style library/custom/myapp/app.js"></script>
    

</div>

</asp:Content>
