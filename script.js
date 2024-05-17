let enlarged = null;

$('.photo-block').click(function() {
    if (enlarged !== this) {
        $(this).toggleClass('enlarged');
        if (enlarged !== null) {
            $(enlarged).toggleClass('enlarged');
        }
        enlarged = this;
    } else {
        $(this).toggleClass('enlarged');
        enlarged = null;
    }
});
