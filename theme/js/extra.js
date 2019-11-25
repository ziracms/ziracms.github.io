zira_base = '/';
zira_scroll_effects_enabled = true;
zira_show_images_description = true;

(function($){
    function buildTopMenu (container) {
        if ($(container).length == 0) return;
        if ($(container).children('#top-menu-wrapper').length > 0) return;
        var menu = $('<div id="top-menu-wrapper"><nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header">'+
        '<div class="top-menu-logo top-menu-header-logo"><a href="/" title="Zira"><img src="/assets/images/zira.png" alt="Zira" /><span>Zira</span></a></div>'+
        '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-menu-container" aria-expanded="false"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>'+
        '</div><div class="collapse navbar-collapse" id="top-menu-container"><ul class="nav navbar-nav">'+
        '<li class="top-menu-logo"><a href="/" title="Zira"><img src="/assets/images/zira.png" alt="Zira" /><span>Zira</span></a></li>'+
        '<li class="menu-item"><a href="/" title="Главная" class="menu-link">Главная</a></li>'+
        '<li class="menu-item"><a href="/ziracms.html" title="Описание Zira CMS" class="menu-link">Описание</a></li>'+
        '<li class="menu-item"><a href="/ziracms/install.html" title="Установка Zira CMS" class="menu-link">Установка</a></li>'+
        '<li class="menu-item"><a href="/ziracms/update.html" title="Обновление Zira CMS" class="menu-link">Обновление</a></li>'+
        '<li class="menu-item"><a href="/forum.html" title="Форум поддержки Zira CMS" class="menu-link">Форум</a></li>'+
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
        '<li class="menu-item"><a href="/forum.html" title="Форум поддержки Zira CMS" class="menu-link">Форум</a></li>'+
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
        '<li class="menu-item"><a href="/ziracms/download.html" title="Скачать Zira CMS" class="menu-link download-link">Скачать</a></li>'+
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
        '<li class="menu-item"><a href="/ziracms/requirements.html" title="Системные требования Zira CMS" class="menu-link">Системные требования</a></li>'+
        '<li class="menu-item"><a href="/ziracms/shortcuts.html" title="Горячие клавиши Zira CMS" class="menu-link">Горячие клавиши</a></li>'+
        '<li class="menu-item"><a href="/ziracms/settings.html" title="Настройка Zira CMS" class="menu-link">Настройка системы</a></li>'+
        '<li class="menu-item"><a href="/ziracms/filemanager.html" title="Работа с файлами в Zira CMS" class="menu-link">Работа с файлами</a></li>'+
        '<li class="menu-item"><a href="/ziracms/publication.html" title="Публикация записей в Zira CMS" class="menu-link">Публикация записей</a></li>'+
        '<li class="menu-item"><a href="/ziracms/menu.html" title="Редактор меню Zira CMS" class="menu-link">Редактор меню</a></li>'+
        '<li class="menu-item"><a href="/ziracms/widgets.html" title="Управление виджетами Zira CMS" class="menu-link">Управление виджетами</a></li>'+
        '<li class="menu-item"><a href="/ziracms/integration.html" title="Интеграция Zira CMS с социальными сетями" class="menu-link">Интеграция с соц. сетями</a></li>'+
        '<li class="menu-item"><a href="/ziracms/console.html" title="Работа с консолью Zira CMS" class="menu-link">Работа с консолью</a></li>'+
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

    function buildDisqus() {
        if ($('#vk_comments').length == 0) return;
        $('#vk_comments').after('<div id="disqus_thread" />');
        var d = document, s = d.createElement('script');
        s.src = 'https://ziracms.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    }

    $(document).ready(function(){
        buildTopMenu($('header .container .row').first());
        buildBottomMenu($('footer .container .row').first());
        buildSecondaryCustomMenu($('.sidebar aside').first());
        buildSecondaryMenu($('.sidebar aside').first());
        buildDisqus();
    });
})(jQuery);