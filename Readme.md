**Recipe API** is tested from usmanlive API.
First of all we defined a function/called a method to load jquery after page loading.


Then called a function **loadRecipe(**) to load recepies from api.
    **loadRecipe** requests recipes from api using **GET** method. Then we grabed the div to show recipies. After that we looped through the response returned from HTTP request and appended the HTML code with receipe body along with two delete and edit button.



After this we added an event listener to btn-danger which is a child of recipes div through div.
We made a call to function delRecipe.
    In **delRecipe** first we grabbed current button then we grabbed the parent of recipe div using closet method. After that we made an HTTP **DELETE** request to api with /id route. And called loadRecipe function to load fresh list of recipes.



Then an event listener to btn-warning which is a child of recipes div through div is added. Then a function call to updateRecipe is made.
    In **updateRecipe** first we grabbed current button then we grabbed the parent of recipe div using closet method adn also ggrabbed it's id from attribute data-id. After that we made an HTTP **GET** request to api with /id route to fetch details of data with id. Then it shows a modal to edit the data from response.



After that an event listener is added to Add Button and a method is called on click.
    In **addRecipe**, first we got title and body text from divs with title and body id, respectively, using .val() method. Then we made a **POST** request to server/api with the data title and body. After successful posting we removed any value from input boxes and called loadRecipe function to refresh page and made the modal hidden.



In last, we added event listener to update button and called a funtion on click event.
    In the function we grabbed the id, body and title of data to be updated and made a **PUT** request to api with /id route. After successful posting we made a call to loadRecipe to refresh page and made the modal hidden.