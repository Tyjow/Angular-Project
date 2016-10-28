app.directive('slidetoggle', function () {
    return {
        link: function (scope, element, attrs) {
            element.parent().bind('click', function () {
                $(element).slideToggle();
            });
        }
    };
});