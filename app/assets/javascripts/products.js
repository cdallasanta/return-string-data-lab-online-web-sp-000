$(".js-product-more").on('click', function(){
  $().get("/products/:id/description", function(data){
    debugger;
  })
})
