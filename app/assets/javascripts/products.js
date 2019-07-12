$(function(){
  $(".js-product-more").on('click', function(){
    let prodId = $(this).data("id");
    $.get(`/products/${prodId}/inventory`, function(data){
      if (data === "true") {
        $.get(`/products/${prodId}/description`, function(data){
          // let description = data;
        })
      } else {
        
      }
    })
  })
})
