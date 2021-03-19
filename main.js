var menu_list_array = [
    "Chicken Tandoori Pizza",
    "Veg Supreme Pizza",
    "Paneer Tikka Pizza",
    "Deluxe Veggie Pizza",
    "Veg Extravaganza Pizza"
];

function getmenu() {
    var html_data;
    html_data = "<ol class='menulist'>";
    menu_list_array.sort();
    for(i = 0; i < menu_list_array.length; i++){
        html_data = html_data + "<li>" + menu_list_array[i] + "</li>";
    }
    html_data = html_data + "</ol>";
    document.getElementById("display_menu").innerHTML = html_data;
}

function add_item() {
    var html_data2;
    var new_item = document.getElementById("add_item").value;
    menu_list_array.push(new_item);
    menu_list_array.sort();
    html_data2 = "<section class='cards'>";
    
    for(j = 0; j < menu_list_array.length; j++) {
        html_data2 = html_data2 + "<div class='card'>" + "<img src='pizzaImg.png'>" +menu_list_array[j] + "</div>"
    }
    html_data2 = html_data2 + "</section>"
    document.getElementById("display_addedmenu").innerHTML = html_data2;
}