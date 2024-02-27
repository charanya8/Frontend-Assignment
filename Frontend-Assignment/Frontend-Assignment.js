function searchFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("menu");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

document.getElementById("homeLink").addEventListener("click", function(event) {

    event.preventDefault();


    var subMenu = document.querySelector("#homeLink .sub-menu");
    if (subMenu.style.display === "none" || subMenu.style.display === "") {
        subMenu.style.display = "block";
    } else {
        subMenu.style.display = "none";
    }
});
document.getElementById("homeLink").addEventListener("click", function(event) {
    event.preventDefault();
    var subOptions = document.querySelector("#homeLink .sub-options");
    if (subOptions.style.display === "none" || subOptions.style.display === "") {
        subOptions.style.display = "flex";
    } else {
        subOptions.style.display = "none";
    }
});
// Function to toggle options visibility
function toggleOptions() {
    var options = document.getElementById("options");
    if (options.style.display === "block") {
        options.style.display = "none";
    } else {
        options.style.display = "block";
    }
}

// Function to toggle visibility of the additional table
function toggleAdditionalTable() {
    var additionalTable = document.querySelector('.additional-table');
    if (additionalTable.style.display === 'none') {
        additionalTable.style.display = 'block';
    } else {
        additionalTable.style.display = 'none';
    }
}

// Add event listener to the "Live (30)" link to toggle the table visibility
document.querySelector('a[href="#"]').addEventListener('click', toggleAdditionalTable);