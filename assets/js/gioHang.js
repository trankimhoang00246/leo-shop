function tinhtong(){
    var cart = document.getElementById("cart");
    var row = cart.getElementsByTagName("tr");
    var tong = 0;
    for(var i = 0; i < row.length; i++){
        var price =row[i].children[3].innerText;
        var count =row[i].children[4].querySelector('input').value;
        price = parseInt(price)*parseInt(count);
        tong += price;
    }
    document.getElementById("tong").innerText = tong;
    var vouch = document.getElementById('voucher').innerText;
    vouch = parseInt(vouch);
    var tt = tong - vouch;
    document.getElementById("thanhTien").innerText = tt;
}
tinhtong();
function them(button){
    var row = button.parentElement.parentElement.cloneNode(true);
    var btnXoa = row.getElementsByTagName("button")[0];
    btnXoa.innerText = "Xóa";
    btnXoa.setAttribute('onclick', 'xoa(this)');
    document.getElementById('cart').appendChild(row);
    tinhtong();
    document.getElementById("cart").style.display="";
}

function xoa(button){
    var row = button.parentElement.parentElement;
    document.getElementById("cart").removeChild(row);
    tinhtong();
}

// document.getElementById("cart").style.display="none";


//tăng giảm số lượng
const amountElements = document.querySelectorAll(".buy-amount");
amountElements.forEach((item) => {
  const minusBtn = item.querySelector(".minus-btn");
  const plusBtn = item.querySelector(".plus-btn");
  const inputQuantity = item.querySelector(".amount");

  minusBtn.addEventListener("click", () => {
    if (--inputQuantity.value <= 0) {
      inputQuantity.value = 1;
    }
    inputQuantity.value = inputQuantity.value;
    tinhtong();
  });

  plusBtn.addEventListener("click", () => {
    inputQuantity.value = ++inputQuantity.value;
    tinhtong();
  });
});
//xóa sản phẩm
function removeRow(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
  tinhtong();
}
// //đảo trạng thái
// function toggleRowStatus(checkbox) {
//   var row = checkbox.parentNode.parentNode;
//   var handleCount = row.getElementsByTagName("div")[1];
//   var dis = handleCount.getElementsByTagName("button");
//   console.log(dis);
//   for(i=0; i < dis.length; i++)
//   {
//     dis.disabled= !dis.disabled;
//   }
// }



//nút tiếp tục mua hàng
var homeButton = document.getElementById('continueChosen');
homeButton.addEventListener('click', function() {
  window.location.href = "./index.html"; // Thay thế bằng URL của trang chủ thực tế
});
