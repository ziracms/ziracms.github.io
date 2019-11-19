zira_base = '/';
zira_scroll_effects_enabled = true;
zira_show_images_description = true;

(function($){
    function buildTopMenu (container) {
        if ($(container).length == 0) return;
        if ($(container).children('#top-menu-wrapper').length > 0) return;
        var menu = $('<div id="top-menu-wrapper"><nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header">'+
        '<div class="top-menu-logo top-menu-header-logo"><a href="/" title="Zira CMS"><img src="/assets/images/zira.png" alt="Zira CMS" /><span>Zira CMS</span></a></div>'+
        '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-menu-container" aria-expanded="false"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>'+
        '</div><div class="collapse navbar-collapse" id="top-menu-container"><ul class="nav navbar-nav">'+
        '<li class="top-menu-logo"><a href="/" title="Zira CMS"><img src="/assets/images/zira.png" alt="Zira CMS" /><span>Zira CMS</span></a></li>'+
        '<li class="menu-item"><a href="/" title="Главная" class="menu-link">Главная</a></li>'+
        '<li class="menu-item"><a href="/ziracms.html" title="Описание Zira CMS" class="menu-link">Описание</a></li>'+
        '<li class="menu-item"><a href="/ziracms/install.html" title="Установка Zira CMS" class="menu-link">Установка</a></li>'+
        '<li class="menu-item"><a href="/ziracms/update.html" title="Обновление Zira CMS" class="menu-link">Обновление</a></li>'+
        '</ul></div></div></nav></div>');
        $(container).append(menu);
        var menuObj = $(container).find('#top-menu-container ul.nav.navbar-nav');
        if ($(menuObj).length == 0) return;
        $(menuObj).children('li.menu-item').each(function(){
            var link = $(this).children('a');
            if ($(link).length == 0) return true;
            if ($(link).attr('href') == window.location.pathname) {
                $(this).addClass('active');
            }
        });
    }

    function buildBottomMenu(container) {
        if ($(container).length == 0) return;
        if ($(container).children('#footer-menu-wrapper').length > 0) return;
        var menu = '<div id="footer-menu-wrapper"><nav><ul class="menu">'+
        '<li class="menu-item"><a href="/" title="Главная" class="menu-link">Главная</a></li>'+
        '<li class="menu-item-separator"></li>'+
        '<li class="menu-item"><a href="/" title="Zira CMS" class="menu-link">Zira CMS <span class="caret"></span></a>'+
        '<ul class="footer-child-menu">'+
        '<li><a href="/ziracms.html" title="Описание Zira CMS">Описание</a></li>'+
        '<li><a href="/ziracms/install.html" title="Установка Zira CMS">Установка</a></li>'+
        '<li><a href="/ziracms/update.html" title="Обновление Zira CMS">Обновление</a></li>'+
        '<li><a href="/ziracms/download.html" title="Скачать Zira CMS">Скачать</a></li>'+
        '<li><a href="https://github.com/ziracms/zira" title="Репозиторий Zira CMS">Репозиторий</a></li>'+
        '</ul>'+
        '</li>'+
        '<li class="menu-item-separator"></li>'+
        '<li class="menu-item"><a href="https://money.yandex.ru/to/410014796567498" title="Помощь проекту" class="menu-link">Помощь проекту</a></li>'+
        '</ul></nav></div>';
        $(container).prepend(menu);
        
    }

    function buildSecondaryMenu(container) {
        if ($(container).length == 0) return;
        if ($(container).children('#secondary-menu-wrapper').length > 0) return;
        var menu = '<div id="secondary-menu-wrapper"><nav><ul class="nav nav-pills nav-stacked">'+
        '<li class="menu-item"><a href="https://github.com/ziracms/zira" title="Репозиторий Zira CMS" class="menu-link">Репозиторий</a></li>'+
        '<li class="menu-item"><a href="https://vk.com/ziracms.public" title="Сообщество Zira CMS" class="menu-link">Сообщество</a></li>'+
        '<li class="menu-item"><a href="/ziracms/download.html" title="Скачать Zira CMS" class="menu-link">Скачать</a></li>'+
        '</ul></nav></div>';
        $(container).prepend(menu);
        var menuObj = $(container).find('#secondary-menu-wrapper ul.nav.nav-pills.nav-stacked');
        if ($(menuObj).length == 0) return;
        $(menuObj).children('li.menu-item').each(function(){
            var link = $(this).children('a');
            if ($(link).length == 0) return true;
            if ($(link).attr('href') == window.location.pathname) {
                $(this).addClass('active');
            }
        });
    }

    function buildSecondaryCustomMenu(container) {
        if ($(container).length == 0) return;
        if ($(container).children('.secondary-custom-menu-wrapper').length > 0) return;
        var menu = '<div class="secondary-custom-menu-wrapper"><nav><ul class="nav nav-pills nav-stacked">'+
        '<li class="menu-item"><a href="/ziracms/shortcuts.html" title="Горячие клавиши Zira CMS" class="menu-link">Горячие клавиши</a></li>'+
        '<li class="menu-item"><a href="/ziracms/settings.html" title="Настройка Zira CMS" class="menu-link">Настройка системы</a></li>'+
        '</ul></nav></div>';
        $(container).prepend(menu);
        var menuObj = $(container).find('.secondary-custom-menu-wrapper ul.nav.nav-pills.nav-stacked');
        if ($(menuObj).length == 0) return;
        $(menuObj).children('li.menu-item').each(function(){
            var link = $(this).children('a');
            if ($(link).length == 0) return true;
            if ($(link).attr('href') == window.location.pathname) {
                $(this).addClass('active');
            }
        });
    }

    $(document).ready(function(){
        buildTopMenu($('header .container .row').first());
        buildBottomMenu($('footer .container .row').first());
        buildSecondaryCustomMenu($('.sidebar aside').first());
        buildSecondaryMenu($('.sidebar aside').first());
    });
})(jQuery);