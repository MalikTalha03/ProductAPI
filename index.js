$(function () {
    loadProduct();
    $("#recipes").on("click", ".btn-danger", delProduct);
    $("#recipes").on("click", ".btn-warning", updateProduct);
    $("#addBtn").on("click", addProduct);
    $("#updateSave").on("click",function () {
        var id = $("#updateId").val();
        var name = $("#updateTitle").val();
        var price = $("#updatePrice").val();
        var color = $("#updateColor").val();
        var department = $("#updateDept").val();
        var description = $("#updateDesc").val();
      $.ajax({
        url: "https://usman-fake-api.herokuapp.com/api/products/" + id,
        data: { name, price, color,department, description },
        method: "PUT",
        success: function (response) {
            loadProduct();
          $("#updateModal").modal("hide");
        },
      });
    });
    function updateProduct() {
    var btn = $(this);
    var parentDiv = btn.closest(".recipe");
    let id = parentDiv.attr("data-id");
    $.get(
      "https://usman-fake-api.herokuapp.com/api/products/" + id,
      function (response) {
        $("#updateId").val(response._id);
        $("#updateTitle").val(response.name);
        $("#updatePrice").val(response.price);
        $("#updateColor").val(response.color);
        $("#updateDept").val(response.department);
        $("#updateDesc").val(response.description);
        $("#updateModal").modal("show");
      }
    );
  }
  function addProduct() {
    var name = $("#title").val();
    var color = $("#color").val();
    var price = $("#price").val();
    var department = $("#dept").val();
    var description = $("#desc").val();
    $.ajax({
      url: "https://usman-fake-api.herokuapp.com/api/products",
      method: "POST",
      data: { name, price, color,department, description },
      success: function (response) {
        $("#title").val("");
        $("#color").val("");
        $("#price").val("");
        $("#dept").val("");
        $("#desc").val("");
        loadProduct();
        $("#addModal").modal("hide");
      },
    });
  }
  function delProduct() {
    var btn = $(this);
    var parentDiv = btn.closest(".recipe");
    let id = parentDiv.attr("data-id");
    $.ajax({
      url: "https://usman-fake-api.herokuapp.com/api/products/" + id,
      method: "DELETE",
      success: function () {
        loadProduct();
      },
    });
  }
  function loadProduct() {
    $.ajax({
      url: "https://usman-fake-api.herokuapp.com/api/products",
      method: "GET",
      error: function (response) {
        var recipes = $("#recipes");
        recipes.html("An Error has occured");
      },
      success: function (response) {
        var recipes = $("#recipes");
        recipes.empty();
        for (var i = 0; i < response.length; i++) {
          var rec = response[i];
          recipes.append(
            `<div class="recipe" data-id="${rec._id}"><h3>${rec.name} <p>Color : ${rec.color}</p></h3><p>Rs. ${rec.price}</p><p>${rec.department}</p><p><button class="btn btn-danger btn-sm float-right">delete</button><button class="btn btn-warning btn-sm float-right">Edit</button><p>${rec.description}</p></div>`
          );
        }
      },
    });
  }
  
  });
  