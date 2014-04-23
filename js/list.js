$(function () {
    if (localStorage.getItem("list") !== null) {
        $('.list-group').html(localStorage.getItem("list"));
    }


    $('input').keypress(function (e) {
        if (e.which === 13) {
            addItem();
        }

    });

    $('#add-item').click(function () {
        addItem();
    });

    function addItem() {
        var listData = $('input').val();
        var listItem = '<a href="#" class="list-group-item"></a>';
        $('.list-group').prepend($(listItem).text(listData).append('<span href="" class="close">&#10006;</span>').prepend('<input type="checkbox" class="checkmark" />'));
        $('input').val('');
        localStorage.setItem('list', $('.list-group').html());
    }

    $('.list-group').on("click", '.checkmark', function () {

        if ($('.checkmark').is(':checked')) {
            $(this).parent().addClass('list-group-item-success').css("text-decoration", "line-through");
            $(this).attr('checked', true);
        } else {
            $(this).attr('checked', false);
            $(this).parent().removeClass('list-group-item-success').css("text-decoration", "");
        }
        localStorage.setItem('list', $('.list-group').html());
    });
    $('.list-group').on("click", '.close', function () {
        $(this).parent().remove();
        localStorage.setItem('list', $('.list-group').html());
    });


});