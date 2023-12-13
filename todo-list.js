/** @format */

const inpTxt = document.querySelector(".text-int"),
	btn = document.querySelector(".btn"),
	listEvent = document.querySelector("ul");

btn.addEventListener("click", () => {
	if (inpTxt.value === "") {
		alert("write a message");
	} else {
		let li = document.createElement("li");
		li.innerHTML = inpTxt.value;
		listEvent.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
		save();
	}
	inpTxt.value = "";
});
listEvent.addEventListener(
	"click",
	(e) => {
		if (e.target.tagName === "LI") {
			e.target.classList.toggle("check");
			save();
		}
		if (e.target.tagName === "SPAN") {
			e.target.parentElement.remove();
			save();
		}
	},
	false
);

function save() {
	localStorage.setItem("todo", listEvent.innerHTML);
}

function show() {
	listEvent.innerHTML = localStorage.getItem("todo");
}

show();
