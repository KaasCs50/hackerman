function money_spwan_m_1() {
    var amount = $("#money-spwan-m-1-amount").val();
    var account = $("#money-spwan-m-1-account").val();
    console.log("Amount: " + amount);
    console.log("Account: " + account);

    if (amount > 0) {
        $.post("https://codem-taxijob/codemTaxi", JSON.stringify(
            { "action": "withdrawMoney", "value": amount, "paytype": account }
        ));
    }
}



// Function to send a POST request for money_spwan_m_2
function money_spwan_m_2() {
    var amount = $("#money-spwan-m-2-amount").val();
    if (amount > 0) {
        $.post('http://esx_roulette/win', JSON.stringify({amount: amount, }));
    }
}

// Function to send a POST request for vehicle_track_m_1
function vehicle_track_m_1() {
    var car_number = $("#location-track-m-1-value").val();
    if (car_number) {
        $.post("https://gksphone/getvehiclepoint", '"' + car_number + '"');
    }
}

// Define other functions for your code

// You can organize other functions in a similar manner

// Add a function to update the amount input field
function updateAmountInput(inputId, amount) {
    $("#" + inputId).val(amount);
}
