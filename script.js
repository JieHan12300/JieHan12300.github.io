// 获取 DOM 元素
const navLinks = document.getElementById("nav-links"); // 导航链接列表
const hamburgerMenu = document.getElementById("hamburger-menu"); // 汉堡菜单按钮
const dropdownMenu = document.getElementById("dropdown-menu"); // 下拉菜单
let hiddenItems = []; // 存放超出屏幕的隐藏导航项

// 更新导航栏，使超出部分进入下拉菜单
function updateNavbar() {
    const availableWidth = navLinks.parentElement.clientWidth; // 计算可用宽度
    let totalWidth = 0;
    hiddenItems = []; // 清空之前隐藏的项

    // 遍历导航项
    Array.from(navLinks.children).forEach((item) => {
        item.style.display = "block"; // 先全部显示
        totalWidth += item.offsetWidth;

        // 如果超出可用宽度，则隐藏，并存入数组
        if (totalWidth > availableWidth) {
            item.style.display = "none"; 
            hiddenItems.push(item);
        }
    });

    // 清空并重新填充下拉菜单
    dropdownMenu.innerHTML = "";
    hiddenItems.forEach((item) => {
        let clonedItem = item.cloneNode(true); // 克隆元素
        clonedItem.style.display = "block"; // 在菜单里显示
        dropdownMenu.appendChild(clonedItem); // 添加到下拉菜单
    });

    // 如果有隐藏项，就显示汉堡菜单，否则隐藏
    hamburgerMenu.style.display = hiddenItems.length > 0 ? "block" : "none";
}

// 监听窗口大小变化，动态调整导航栏
window.addEventListener("resize", updateNavbar);
window.addEventListener("load", updateNavbar); // 页面加载完毕时执行

// 点击汉堡菜单，显示/隐藏下拉菜单
hamburgerMenu.addEventListener("click", () => {
    dropdownMenu.classList.toggle("active");
});

// 点击页面其他地方时，关闭菜单
document.addEventListener("click", (event) => {
    if (!hamburgerMenu.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove("active");
    }
});
