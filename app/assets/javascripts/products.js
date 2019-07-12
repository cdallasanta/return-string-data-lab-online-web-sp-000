$(function(){
  $(".js-product-more").on('click', function(){
    debugger;
    let prod-id = $(this).data("id");
    $().get("/products/:id/description", function(data){
      debugger;
    })
  })
})
