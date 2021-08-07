$(document).ready(function() {
    $.validator.addMethod('date', function(value, element, param) {
        return (value != 0) && (value <= 31) && (value == parseInt(value, 10));
    }, 'Please enter a valid date!');
    $.validator.addMethod('month', function(value, element, param) {
        return (value != 0) && (value <= 12) && (value == parseInt(value, 10));
    }, 'Please enter a valid month!');
    $.validator.addMethod('year', function(value, element, param) {
        return (value != 0) && (value >= 1900) && (value == parseInt(value, 10));
    }, 'Please enter a valid year not less than 1900!');
    $.validator.addMethod('username', function(value, element, param) {
        var nameRegex = /^[a-zA-Z0-9]+$/;
        return value.match(nameRegex);
    }, 'Only a-z, A-Z, 0-9 characters are allowed');

    // var val = {
    // Specify validation rules

    // }
    $("#myForm").multiStepForm({
        // defaultStep:0,
        beforeSubmit: function(form, submit) {
            console.log("called before submiting the form");
            console.log(form);
            console.log(submit);
        }
    }).navigateTo(0);
});