const DAY = document.getElementById('day');
const DAY_ERROR_MESSAGE = document.getElementsByClassName('error-message')[0];
const MONTH = document.getElementById('month');
const MONTH_ERROR_MESSAGE = document.getElementsByClassName('error-message-month')[0]
const YEAR = document.getElementById('year');
const YEAR_ERROR_MESSAGE = document.getElementsByClassName('error-message-year')[0]
let dayOutput = document.getElementById('D');
let monthOutput = document.getElementById('M');
let yearOutput = document.getElementById('Y');
const TodayDate = new Date();
console.log(TodayDate)


DAY.addEventListener('input', (e) => {
   

    const dayValue = DAY.value; // Still a string

    if (dayValue === '') {
        // Check if the input field is empty
        DAY.classList.add('error');
        DAY_ERROR_MESSAGE.classList.add('error');
        DAY_ERROR_MESSAGE.innerHTML = 'This Field Is required';
        dayOutput.innerHTML = "--";
    } else if (Number(dayValue) < 1 || Number(dayValue) > 31) {
        // Check if the value is outside the valid range for days (1-31)
        DAY.classList.add('error');
        DAY_ERROR_MESSAGE.classList.add('error');
        DAY_ERROR_MESSAGE.innerHTML = "Must be a valid day";
        dayOutput.innerHTML = "--";
    } else {
        // If the input is valid
        DAY.classList.remove('error');
        DAY_ERROR_MESSAGE.classList.remove('error');
        DAY_ERROR_MESSAGE.innerHTML = '';
        let toDayNumber = TodayDate.getDate();
        let dayDiff = toDayNumber - DAY.value ;
        dayOutput.innerHTML = dayDiff;
    }
});

MONTH.addEventListener('input', (e)=>{

    const monthValue = MONTH.value; // Still a string

    if (monthValue === '') {
        // Check if the input field is empty
        MONTH.classList.add('error');
        MONTH_ERROR_MESSAGE.classList.add('error');
        MONTH_ERROR_MESSAGE.innerHTML = 'This Field Is required';
        monthOutput.innerHTML = "--";
    } else if (Number(monthValue) < 1 || Number(monthValue) > 12) {
        // Check if the value is outside the valid range for days (1-31)
        MONTH.classList.add('error');
        MONTH_ERROR_MESSAGE.classList.add('error');
        MONTH_ERROR_MESSAGE.innerHTML = "Must be a valid day";
        monthOutput.innerHTML = "--";
    } else {
        // If the input is valid
        MONTH.classList.remove('error');
        MONTH_ERROR_MESSAGE.classList.remove('error');
        MONTH_ERROR_MESSAGE.innerHTML = '';
        let monthNumber = TodayDate.getMonth();
        let monthDiff = monthNumber - monthValue + 1;
        monthOutput.innerHTML = monthDiff;
    }
})
YEAR.addEventListener('input', (e)=>{

    const yearValue = YEAR.value; // Still a string

    if (yearValue === '') {
        // Check if the input field is empty
        YEAR.classList.add('error');
        YEAR_ERROR_MESSAGE.classList.add('error');
        YEAR_ERROR_MESSAGE.innerHTML = 'This Field Is required';
        yearOutput.innerHTML = "--";
    } else if (Number(yearValue) < 1900 || Number(yearValue) > TodayDate.getFullYear()) {
        // Check if the value is outside the valid range for days (1-31)
        YEAR.classList.add('error');
        YEAR_ERROR_MESSAGE.classList.add('error');
        YEAR_ERROR_MESSAGE.innerHTML = "Must be a valid day";
        YEAR.innerHTML = "--";
    } else {
        // If the input is valid
        YEAR.classList.remove('error');
        YEAR_ERROR_MESSAGE.classList.remove('error');
        YEAR_ERROR_MESSAGE.innerHTML = '';
        let yearNumber = TodayDate.getFullYear();
        let yearDiff = yearNumber - yearValue;
        yearOutput.innerHTML = yearDiff;
    }
})