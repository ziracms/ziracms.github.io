window.onload = function() {
    VK.init({apiId: 7213413, onlyWidgets: true});
    VK.Widgets.Comments("vk_comments", {limit: 10, attach: "graffiti,photo"});
    VK.Widgets.Like("vk_like", {type: "button"});
    VK.Widgets.CommunityMessages("vk_community_messages", 188925450, {disableExpandChatSound: "1",tooltipButtonText: "Есть вопрос?"});
    VK.Widgets.Group("vk_groups", {mode: 1}, 188925450);
}