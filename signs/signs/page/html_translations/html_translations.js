frappe.pages['html-translations'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'HTML Translations Check',
		single_column: true
	});

	var myDiv = $(".layout-main");
	var paragraph = document.createElement("p");
	paragraph.textContent = (__("Frappe, pronounced fra-pay, is a full stack, batteries-included, web framework written in Python and Javascript with MariaDB as the database. It is the framework which powers ERPNext, is pretty generic and can be used to build database driven apps"))
	myDiv.append(paragraph);
}