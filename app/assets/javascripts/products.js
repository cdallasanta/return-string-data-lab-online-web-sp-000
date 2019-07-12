$(function(){
  $(".js-product-more").on('click', function(){
    let prodId = $(this).data("id");
    $.get(`/products/${prodId}/inventory`, function(data){
      if (data === "true") {
        $.get(`/products/${prodId}/description`, function(data){
          $(`#product-${prodId}-description`).text(data);
        })
      } else {
        $(`#product-${prodId}-description`).text("Sold out");
      }
    })
  })
})
