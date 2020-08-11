/* eslint-disable indent */
'use strict';


$(function shoppingList(){
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();

    // create newItem
    let newItem = $('#shopping-list-entry').val();
    console.log(newItem); 

    if (newItem !== ''){
      $('ul').append(
        `<li><span class="shopping-item">${newItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`
      ); 
    }
    
    
    // create checkItem
    $('.shopping-item-toggle').on('click', function(){
      $(this).addClass('shopping-item__checked');
      console.log(this);
    });
    


    //create deleteItem
    // $('.shopping-list').on('click', function(event){
    //     this.remove();
    // });
    $('.shopping-item-delete').on('click', function() {
      $(this).parent('li').remove();
      console.log(this);
    });

  });
});
