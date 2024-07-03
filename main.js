function roomss() {
    var selectedValue = document.getElementById("rooms").value;

    if (selectedValue == 2) {
        document.getElementById("room").innerText = "11 Комната";
    }
    if (selectedValue == 3) {
        document.getElementById("room").innerText = "12 Комната";
        document.getElementById("item-9").innerText = "@baby_lol24_02"
        document.getElementById("item-5").innerText = "@syperkolt"
    }
    if (selectedValue == 4) {
        document.getElementById("room").innerText = "14 Комната";
    }
    if (selectedValue == 5) {
        document.getElementById("room").innerText = "15 Комната";
        document.getElementById("item-9").innerText = "@Gggbjf0"
    }
}
