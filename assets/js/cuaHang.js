document.addEventListener('DOMContentLoaded', function () {
    // Lắng nghe sự kiện change trên phần tử select tỉnh
    var provinceSelect = document.getElementById('provinceSelect');
    var filteredStoreList = document.getElementById('filteredStoreList');
    var originalStoreList = Array.from(filteredStoreList.children);
  
    provinceSelect.addEventListener('change', function () {
      // Lấy giá trị tỉnh được chọn
      var selectedProvince = provinceSelect.value;
  
      // Lọc danh sách cửa hàng dựa trên tỉnh được chọn
      filterStoreList(selectedProvince);
      function filterStoreList(province) {
        // Hiển thị danh sách cửa hàng tương ứng
        filteredStoreList.innerHTML = '';
    
        originalStoreList.forEach(function (store) {
          var storeProvince = store.getAttribute('data-province');
          if (province === 'all' || province === storeProvince) {
            // Thêm cửa hàng vào danh sách nếu tỉnh trùng khớp hoặc là lựa chọn "Tất cả"
            filteredStoreList.appendChild(store.cloneNode(true));
          }
        });
    
        // Hiển thị danh sách cửa hàng
        document.getElementById('storeList').style.display = 'block';
      }
    });
  
    
});
