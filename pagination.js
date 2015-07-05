(function($){
    $.fn.customPagination = function(options){
        var paginationContainer = this;
        var itemsToPagination;
        var settings = {};

        var defaults = {
            itemsPerPage: 2
        };


        $.extend(settings, defaults, options);
        var itemsPerPage = settings.itemsPerPage;

        itemsToPagination = $(settings.itemsToPagination);
        var numberOfPaginationLinks = Math.ceil(itemsToPagination.length / itemsPerPage);

        $("<ul></ul>").prependTo(paginationContainer);

        itemsToPagination.filter(":gt(" + (itemsPerPage - 1) + ")").hide();

        for(var index=0; index<numberOfPaginationLinks; index++){
            paginationContainer.find("ul").append("<li>"+(index+1)+"</li>");
        }

        paginationContainer.find("ul li").on("click", function(){
            var linkNumber = $(this).text();

            var itemsToHide = itemsToPagination.filter(":lt(" + ((linkNumber - 1)*itemsPerPage) + ")");
            $.merge(itemsToHide, itemsToPagination.filter(":gt(" + ((linkNumber * itemsPerPage) - 1) + ")"));

            itemsToHide.hide();
            var itemsToShow = itemsToPagination.not(itemsToHide);
            itemsToShow.show();
        });
    };
}(jQuery));
