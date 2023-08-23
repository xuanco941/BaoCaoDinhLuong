(function ($) {
    var routes = {},
        defaultRoute = 'sidebar.dashboard';

    routes['sidebar'] = {
        url: '#/',
        templateUrl: 'src/access/sidebar.html',
    };

    routes['sidebar.dashboard'] = {
        url: 'dashboard',
        templateUrl: 'src/dashboard.html',
    };
    routes['sidebar.list-files'] = {
        url: 'list-files',
        templateUrl: 'src/list-files.html',
    };
    routes['sidebar.list-of-transaction-offices'] = {
        url: 'list-of-transaction-offices',
        templateUrl: 'src/list-of-transaction-offices.html',
    };
    routes['sidebar.bao-cao-dinh-luong'] = {
        url: 'bao-cao-dinh-luong',
        templateUrl: 'src/bao-cao-dinh-luong.html',
    };
    routes['sidebar.bao-cao-dinh-tinh'] = {
        url: 'bao-cao-dinh-tinh',
        templateUrl: 'src/bao-cao-dinh-tinh.html',
    };
    routes['sidebar.bao-cao-xep-hang'] = {
        url: 'bao-cao-xep-hang',
        templateUrl: 'src/bao-cao-xep-hang.html',
    };
    routes['sidebar.ket-qua-dinh-luong'] = {
        url: 'ket-qua-dinh-luong',
        templateUrl: 'src/ket-qua-dinh-luong.html',
    };
    routes['sidebar.ket-qua-dinh-tinh'] = {
        url: 'ket-qua-dinh-tinh',
        templateUrl: 'src/ket-qua-dinh-tinh.html',
    };
    
    routes['forbidden'] = {
        url: '#/403-forbidden',
        templateUrl: 'src/error/403-forbidden.html'
    };
    
    $.router.setData(routes).setDefault(defaultRoute)
        .onRouteChanged(function (e, route, param) {
            if (route.viewModel) {
                route.viewModel(route, param);
            }
        });
    
    $.when($.ready).then(function () {
        $.router.run('.ui-view', defaultRoute);
    });

})(jQuery);