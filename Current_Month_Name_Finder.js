//find month name from date function manually which is made by muiduzzaman mahim

//Current date 
const current_Date = new Date();

//month_name_finder_manual_function
function month_name(month_numerical_value) {
    var month_name;
    var month_list = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for (var i = 1; i <= 12; i++) {
        switch (month_numerical_value) {
            case i:
                month_name = month_list[i];
                break;
        }
    }
    return month_name;
}

//print in month name in the consol. 
console.log("Current month name is '" + month_name(current_Date.getMonth()) + "'.");
console.log("Current month name numerical value is '" + current_Date.getMonth() + "'.");
