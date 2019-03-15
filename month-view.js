// view route: calendar\.google\.com\/calendar\/r\/month

const exeptions = ['Didier Krux', 'Holidays in Hong Kong'];

// check/uncheck all calendars exept exeptions
window.addEventListener('keypress', function (key) {
    if (key.code === 'Backquote') {
        const checkboxes = document.querySelectorAll('.uVccjd');
        checkboxes.forEach((checkbox) => {
            if (exeptions.indexOf(checkbox.attributes['aria-label'].value) === -1) {
                checkbox.click()
            }
        });
    }
});

// uncheck all calendars exept exeptions
const checkboxes = document.querySelectorAll('.uVccjd');
checkboxes.forEach((checkbox) => {
    if (exeptions.indexOf(checkbox.attributes['aria-label'].value) === -1 && checkbox.attributes.class.value.indexOf('N2RpBe') !== -1) {
        checkbox.click()
    }
});
