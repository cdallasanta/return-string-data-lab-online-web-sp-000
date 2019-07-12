$(".js-product-more").on('click', function(){
  debugger;
  $().get("/products/:id/description", function(data){
    debugger;
  })
})
