document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".navbar ul");
    const moreMenu = document.querySelector(".more-menu");
    const dropdown = document.querySelector(".more-menu .dropdown");

    function adjustNav() {
        const navItems = Array.from(nav.children).filter(li => !li.classList.contains("more-menu"));
        const navWidth = nav.offsetWidth;
        let totalWidth = 0;

        // 重置导航栏
        navItems.forEach(item => {
            item.style.display = "inline";
            dropdown.innerHTML = "";
        });

        // 计算每个导航项的宽度
        navItems.forEach((item, index) => {
            totalWidth += item.offsetWidth;

            // 如果总宽度超过导航栏宽度，将多余的项移动到下拉菜单
            if (totalWidth > navWidth) {
                item.style.display = "none";
                const clone = item.cloneNode(true);
                dropdown.appendChild(clone);
            }
        });

        // 如果有隐藏的项，显示“更多”菜单
        if (dropdown.children.length > 0) {
            moreMenu.style.display = "inline";
        } else {
            moreMenu.style.display = "none";
        }
    }

    // 初始调整
    adjustNav();

    // 窗口大小变化时重新调整
    window.addEventListener("resize", adjustNav);
});
