let userLogin = JSON.parse(localStorage.getItem("users"))||[];
let renderUser = JSON.parse(localStorage.getItem("login"))||[];
let cartProduct = document.getElementById("cartProduct");
let renderItem = document.getElementById("renderCart");
let renderCartProduct = document.getElementById("renderCartProduct");

function renderCart() {
   for(let i=0;i<userLogin.length;i++){
        if(userLogin[i].email===renderUser){
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
            let item = "";
            if(userLogin[i].cart == ""){
                renderItem.style.display = "none";
                cartProduct.innerHTML = `<div class="cart-none">
                                            <img src="../assets/images/none-removebg-preview.png" alt="">
                                            <b>Giỏ hàng của bạn còn trống</b>
                                            <a href="../utils/index.html" class="btn-cart">Mua ngay</a>
                                        </div>
                                        `
            }else{
                for (let j = 0; j < userLogin[i].cart.length; j++) {
                    renderItem.style.display = "block";
                    item += `
                            <tr>
                                <th scope="row"><img style="width: 100px" src="${userLogin[i].cart[j].image}"/></th>
                                <td>${userLogin[i].cart[j].name}</td>
                                <td class="text-price">${userLogin[i].cart[j].price}.000 <u>đ</u></td>
                                <td><input class="quantityProduct" type="text" value="${userLogin[i].cart[j].quantity}" style="width: 40px"></td>
                                <td class="text-price">${+(userLogin[i].cart[j].price)*+(userLogin[i].cart[j].quantity)}.000 <u>đ</u></td>
                                <td><button class="remove-product" onclick="remove">Xóa</button></td>
                            </tr>
                            `
                }
                renderCartProduct.innerHTML = item;
            }
        }
    } 
}

renderCart();


let quantityProduct = document.querySelectorAll(".quantityProduct");

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

function remove() {
    let index = userLogin[i].cart.findIndex((item, index)=>{
        return item.id == id;
    });
    confirm("Xóa sản phẩm này?");
}