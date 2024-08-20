// $(function() {
//     $('#daterange').daterangepicker({
//         showDropdowns: true,
//         autoUpdateInput: false,
//         locale: {
//             cancelLabel: 'Clear'
//         }
//     });

//     $('#daterange').on('apply.daterangepicker', function(ev, picker) {
//         $(this).val(picker.startDate.format('YYYY/MM/DD') + ' - ' + picker.endDate.format('YYYY/MM/DD'));
//     });

//     $('#daterange').on('cancel.daterangepicker', function(ev, picker) {
//         $(this).val('');
//     });
// });

$(function() {
    $('#daterange').daterangepicker({
        showDropdowns: true,
        autoUpdateInput: false,
        locale: {
            format: 'DD/MM/YYYY',
            cancelLabel: 'Clear'
        },
        linkedCalendars: false
    });

    $('#daterange').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
    });

    $('#daterange').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });

    // Ensure that the calendars show independently
    $('#daterange').on('show.daterangepicker', function(ev, picker) {
        picker.container.find('.drp-calendar.left').datepicker({
            onSelect: function(selectedDate) {
                var date = $(this).datepicker('getDate');
                picker.setStartDate(moment(date));
                picker.leftCalendar.month = moment(date).startOf('month');
                picker.updateCalendars();
            }
        });

        picker.container.find('.drp-calendar.right').datepicker({
            onSelect: function(selectedDate) {
                var date = $(this).datepicker('getDate');
                picker.setEndDate(moment(date));
                picker.rightCalendar.month = moment(date).startOf('month');
                picker.updateCalendars();
            }
        });
    });
});
