window.onload = function() {
    VK.init({apiId: 7213413, onlyWidgets: true});
    VK.Widgets.Comments("vk_comments", {limit: 10, attach: "graffiti,photo"});
}