$(function(){
  $(".js-product-more").on('click', function(){
    let prodId = $(this).data("id");
    $().get(`/products/${prodId}/description`, function(data){
      debugger;
    })
  })
})
