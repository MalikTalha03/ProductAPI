$(document).ready(function () {
  loadProduct();
  $("#recipes").on("click", ".btn-danger", function() {
      delProduct($(this).closest(".recipe").data("id"));
  });
  $("#recipes").on("click", ".btn-warning", function() {
      updateProduct($(this).closest(".recipe").data("id"));
  });
  $("#addBtn").on("click", addProduct);
  $("#updateSave").on("click", updateProductData);
});

function updateProductData() {
  const id = $("#updateId").val();
  const name = $("#updateTitle").val();
  const price = $("#updatePrice").val();
  const color = $("#updateColor").val();
  const department = $("#updateDept").val();
  const description = $("#updateDesc").val();

  $.ajax({
      url: `https://usman-fake-api.herokuapp.com/api/products/${id}`,
      data: { name, price, color, department, description },
      method: "PUT",
      success: function (response) {
          loadProduct();
          $("#updateModal").modal("hide");
      },
  });
}

function updateProduct(id) {
  $.get(`https://usman-fake-api.herokuapp.com/api/products/${id}`, function (response) {
      $("#updateId").val(response._id);
      $("#updateTitle").val(response.name);
      $("#updatePrice").val(response.price);
      $("#updateColor").val(response.color);
      $("#updateDept").val(response.department);
      $("#updateDesc").val(response.description);
      $("#updateModal").modal("show");
  });
}

function addProduct() {
  const name = $("#title").val();
  const color = $("#color").val();
  const price = $("#price").val();
  const department = $("#dept").val();
  const description = $("#desc").val();

  $.ajax({
      url: "https://usman-fake-api.herokuapp.com/api/products",
      method: "POST",
      data: { name, price, color, department, description },
      success: function (response) {
          $("#title, #color, #price, #dept, #desc").val("");
          loadProduct();
          $("#addModal").modal("hide");
      },
  });
}

function delProduct(id) {
  $.ajax({
      url: `https://usman-fake-api.herokuapp.com/api/products/${id}`,
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
          const recipes = $("#recipes");
          recipes.html("An Error has occurred");
      },
      success: function (response) {
          const recipes = $("#recipes");
          recipes.empty();
          for (let i = 0; i < response.length; i++) {
              const rec = response[i];
              recipes.append(
                  `<div class="recipe" data-id="${rec._id}">
                      <h3>${rec.name}<p>Color : ${rec.color}</p></h3>
                      <p>Rs. ${rec.price}</p>
                      <p>${rec.department}</p>
                      <p>
                          <button class="btn btn-danger btn-sm float-right">delete</button>
                          <button class="btn btn-warning btn-sm float-right">Edit</button>
                      </p>
                      <p>${rec.description}</p>
                  </div>`
              );
          }
      },
  });
}