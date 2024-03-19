let store = document.getElementById(`store`);
let user = document.getElementById("user");
let relog = document.getElementById("relog");

let products = [
    {
        id: 1,
        image: `https://bizweb.dktcdn.net/100/385/152/products/26b8c231754594ad20e92447891ae696.jpg?v=1681260642653`,
        name: `Thùng mì hảo hảo x 75g`,
        price: 130,
        stock: 999,
    },
    {
        id: 2,
        image: `https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lpj6o1mldjsv49`,
        name: `Howe. Giày Thể Thao Thoáng Khí Thoải Mái Phong Cách Mới Cho Nam`,
        price: 102,
        stock: 999,
    },
    {
        id: 3,
        image: `https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-logifpsscv03a3`,
        name: `DẦU ĂN CAO CẤP HAPPI KOKI CAN 2 LÍT .DATE LUÔN MỚI`,
        price: 88,
        stock: 999,
    },
    {
        id: 4,
        image: `https://down-vn.img.susercontent.com/file/6935cce9aa5dda4497244859eaf40d4f`,
        name: `Mũ Lưỡi Trai Nón Lưỡi Trai Thời Trang Hàn Quốc EDIKO`,
        price: 45,
        stock: 999,
    },
    {
        id: 5,
        image: `https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llahrq76isombe`,
        name: `Combo 2 chai dầu gội đầu gồm clear Bạc Hà 480ml và Clear Men 450ml`,
        price: 99,
        stock: 999,
    },
    {
        id: 6,
        image: `https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lo91wvlvo22zf6`,
        name: `Áo Khoác Có Nón Bằng Vải Nỉ Dày Dặn Dáng Rộng Phong Cách Mỹ`,
        price: 129,
        stock: 999,
    },
    {
        id: 7,
        image: `https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lotetspoi3uz58`,
        name: `Combo 10 bịch giấy ăn gấu trúc giấy 3 lớp dai mịn`,
        price: 20,
        stock: 999,
    },
    {
        id: 8,
        image: `https://down-vn.img.susercontent.com/file/sg-11134201-7rbl2-lp3qlu4l8ksmb4`,
        name: `Ốp Điện Thoại Silicone Mềm Chống Sốc In Hình Chó Shiba Cho iPhone`,
        price: 40,
        stock: 999,
    },
    {
        id: 9,
        image: `https://down-vn.img.susercontent.com/file/vn-11134201-7r98o-ls3lmfgcula878`,
        name: `Sạc Dự Phòng Trong Suốt 20000mAh TZ07 Với 2 Cổng Sạc Nhanh 22.5w và PD 20W`,
        price: 88,
        stock: 999,
    },
    {
        id: 10,
        image: `https://down-vn.img.susercontent.com/file/sg-11134201-7qveb-lj5pfcta54cpd1`,
        name: `Ví nam da mềm kiểu dáng hàn quốc mới`,
        price: 34,
        stock: 999,
    },
    {
        id: 11,
        image: `https://down-vn.img.susercontent.com/file/5fc1755d503951b81e9778bd5493192a`,
        name: `Túi đeo chéo kiểu ngang da MÀU ĐẬM da loại 1 đẹp dẻo mịn CD3 GSR Shalla k391`,
        price: 49,
        stock: 999,
    },
    {
        id: 12,
        image: `https://down-vn.img.susercontent.com/file/sg-11134201-7rbkw-lq30pmkyxz4719`,
        name: `Bình đựng nước giữ nhiệt lõi thuỷ tinh cách nhiệt hai lớp 330ml cầm tay dễ thương`,
        price: 55,
        stock: 999,
    },
];
        
localStorage.setItem("products", JSON.stringify(products));
        
function render() {
    let data='';
    for(let i=0;i<products.length;i++){
        data += `
                <a href="../pages/product-detail.html?id=${products[i].id}" id="product" class="products-content" style="padding: 5px; text-decoration: none; color: black; max-width: 210px;">
                <img style="width: 200px; height: 200px;" src="${products[i].image}">
                <p class="product-name">${products[i].name}</p>
                <p style="color: red;">${products[i].price}.000 <u>đ</u></p>
                </a>
                `
    }
    store.innerHTML = data;
}
render();
        
let userLogin = JSON.parse(localStorage.getItem("users"))||[];
let renderUser = JSON.parse(localStorage.getItem("login"))||[];
        
setTimeout(checkUser, 2000);
        
function checkUser() {
    if(renderUser==""){
        relog.style.display = "block";
        user.innerHTML = "";
        window.location.href = "../pages/login.html";
    }
}
if(renderUser!=""){
    relog.style.display = "none";
    for(let i=0;i<userLogin.length;i++){
        if(renderUser==userLogin[i].email){
            user.innerHTML = `
                            <div class="userInfor">
                                <a href="#">
                                <img style="width: 20px; height: 20px;" src="../assets/images/avt.png">
                                <t>${userLogin[i].name}</t>
                                </a>
                                <div class="userDown">
                                    <a href="#">Tài khoản của tôi</a>
                                    <a href="#">Đơn mua</a>
                                    <a href="../pages/login.html" onclick="logout(event)">Đăng xuất</a>
                                </div>
                            </div>
                            `
        }
    }
}
function logout(event) {
    localStorage.removeItem("login");
    relog.style.display = "block";
    user.innerHTML = "";
}

let cartCount = document.getElementById("count");
        
for (let i = 0; i < userLogin.length; i++) {
    if(userLogin[i].cart != ""){
        cartCount.style.display = "block";
        cartCount.innerHTML = userLogin[i].cart.length;
        break;
    }else{
        cartCount.style.display = "none";
    }
}