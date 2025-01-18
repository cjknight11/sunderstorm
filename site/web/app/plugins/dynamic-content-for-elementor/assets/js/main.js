(function ($) {

    $(window).on('elementor/frontend/init', function () {

        if (elementorFrontend.isEditMode()) {
            elementor.channels.editor.on('dceMain:previewPage', function (e, editor) {
                var model = e.getOption('editedElementView').getEditModel(),
                        currentElementType = model.get('elType');

            });
        }
    });

})(jQuery);
