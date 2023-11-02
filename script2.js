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
