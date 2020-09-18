class Book {
	constructor(titulo, stream) {
		this.titulo = titulo;
		this.stream = stream;
	}
}

class UI {
	static displayBooks(){
		const books = Store.getBooks();
		books.forEach((book) => UI.addBookToList(book));
	}

	static addBookToList(book){
		const list = document.querySelector('#book-list');
		const row = document.createElement('tr');

		row.innerHTML = `
			<td>${book.titulo}</td>
			<td>${book.stream}</td>
			<td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
		`;

		list.appendChild(row);
		document.querySelector('.bg-modal').style.display = "none";
	}

	static deleteBook(el) {
		if(el.classList.contains('delete')){
			el.parentElement.parentElement.remove();
		}
	}

	static showAlert(message, className){
		const div = document.createElement('div');
		div.className = `alert alert-${className}`;
		div.appendChild(document.createTextNode(message));
		const container = document.querySelector('.container');
		const form = document.querySelector('#form');
		container.insertBefore(div, form)
		setTimeout(() => document.querySelector('.alert').remove(), 700);
	}

	static clearFields(){
		document.querySelector('#titulo').value ='';
		document.querySelector('#stream').value = '';
	}
}

class Store {
	static getBooks(){
		let books;
		if (localStorage.getItem('books') === null) {
			books = [];
		} else {
			books = JSON.parse(localStorage.getItem('books'));
		}

		return books;
	}

	static addBook(book) {
		const books = Store.getBooks();
		books.push(book);
		localStorage.setItem('books', JSON.stringify(books));
	}

	static removeBook(stream) {
		const books = Store.getBooks();

		books.forEach((book, index) => {
			if(book.stream === stream) {
				books.splice(index, 1);
			}
		});

		localStorage.setItem('books', JSON.stringify(books));
	}
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);
document.querySelector('#book-form').addEventListener('submit', (e) => {
	e.preventDefault();

	const titulo = document.querySelector('#titulo').value;
	const stream = document.querySelector('#stream').value;

	if(titulo === '' || stream === '') {
		UI.showAlert('Preencha todos os campos !!!', 'danger');
	} else {
		const book = new Book(titulo, stream);
		UI.addBookToList(book);
		Store.addBook(book);
		UI.showAlert('Título Adicionado', 'success');
		UI.clearFields();
	}
});

document.querySelector('#book-list').addEventListener('click', (e)=> {
	UI.deleteBook(e.target);
	Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
	UI.showAlert('Título removido', 'danger');
});

window.addEventListener('load', () => {
	document.getElementById('modal').style.display = "none";
})



document.getElementById('modal-btn').addEventListener('click', () => {
	document.getElementById('modal').style.display = "block";
})
