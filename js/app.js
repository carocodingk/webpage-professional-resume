const menuIcon2 = document.getElementById("menuIcon2");
const menu2 = document.getElementById('menu2');
const bodyContent = document.getElementById("bodyContent");

menuIcon2.addEventListener('click', Toggle);	

menu2.addEventListener('click', ToggleAfterSelect);

bodyContent.addEventListener('click', ToggleAfterSelect);

window.addEventListener('resize', hidingMenu);

function Toggle() {
	if (menu2.style.display === "block")
		menu2.style.display = "none";
	else
		menu2.style.display = "block";
}

function ToggleAfterSelect() {
	menu2.style.display = "none";
}	

function hidingMenu() {
	menu2.style.display = "none";
}

