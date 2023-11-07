
**Product API** is tested using the usmanlive API. First of all, we load jQuery after the page is loaded.

Then, we call the **loadProduct()** function to load products from the API. The **loadProduct()** function requests products from the API using the **GET** method. We then retrieve the **div** element to display the products. After that, we loop through the response returned from the HTTP request and append HTML code for each product, including product name, color, price, department, and two buttons for deleting and editing the product.

We've added event listeners for the "Delete" and "Edit" buttons within the **#recipes** element. These buttons are children of the **div**, and we've associated them with functions **delProduct()** and **updateProduct()**.




In the **delProduct()** function, we grab the current button, find the parent **div** that represents the product, and obtain its **data-id** attribute. We then make an HTTP **DELETE** request to the API using the product's ID, and upon success, we call the **loadProduct()** function to refresh the list of products.



The **updateProduct()** function is called when the "Edit" button is clicked. It first grabs the current button, then finds the parent **div** representing the product, and retrieves its **data-id**. We make an HTTP **GET** request to the API using the product's ID to fetch the product's details. We then populate the fields in a modal with the product's information, allowing the user to edit it.




An event listener is also added to the "Add" button with the **#addBtn** ID. When this button is clicked, the **addProduct()** function is called. In this function, we retrieve the product name, color, price, department, and description from the respective input fields. We make a **POST** request to the server/API with this product data. After a successful submission, we clear the input fields, call **loadProduct()** to refresh the product list, and hide the modal.



Lastly, we've added an event listener to the "Update" button within the modal, which calls the function associated with **#updateSave**. In this function, we retrieve the ID, name, price, color, department, and description of the product to be updated. We then make a **PUT** request to the API using the product's ID and updated data. Upon success, we call **loadProduct()** to refresh the product list and hide the modal.