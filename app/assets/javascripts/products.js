$(function(){
  $(".js-product-more").on('click', function(){
    let prodId = $(this).data("id");

    // get product description
    $.get(`/products/${prodId}/description`, function(data){
      $(`#product-${prodId}-description`).text(data);
    })

    // If it's sold out, say so
    $.get(`/products/${prodId}/inventory`, function(data){
      if (data === "false") {
        $(`#product-${prodId}-description`).append(" - Sold out");
      } else {
        $(`#product-${prodId}-description`).append(" - Available");
      }
    })
  })
})
