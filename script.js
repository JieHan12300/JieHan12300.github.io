document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-sidebar");
    const sidebar = document.getElementById("sidebar");

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("active"); // 切换侧边栏的显示/隐藏
    });
});
