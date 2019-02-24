// JavaScript Document


class Book{
	
	constructor(title,author,isbn){
		
		
		this.title = title;
		
		this.author = author;
		
		this.isbn = isbn;
		
		
		
	}
	
	
	
	
	
	
	
	
}



 class Store{
	 
	 
	 
 	static getBooks(){
	
		 let books;
		 
		 
		 if(localStorage.getItem('books')===null)
		 {
			 
			 books = [];
			 
			 
		 }
		 
		 
		else{
			
			
			books = JSON.parse(localStorage.getItem('books'));
			
			
			
		}
		
		return books;
		
		
		 
	 }
	 
	 
	 static getDisplay(){
		 
		 
		 const books = Store.getBooks();
		 
		 books.forEach(function(book){
			 
			const ui = new UI;
			 
			ui.addToBookList(book); 
			 
			 
			 
		 });
		 
		 
		 
		 
	 }
	 
	 static addBook(book)
	 {
		 
		 const books = Store.getBooks();
		 
		 books.push(book);
		 
		 localStorage.setItem('books',JSON.stringify(books));
		 
		 
		 
		 
		 
	 }
	 
	
	 
	 static removeBookFromLocalStorage(isbn){
		 
		 const books = Store.getBooks();
		 
		 books.forEach(function(book,index){
			 
			 if(book.isbn === isbn){
				 
				 
				 books.splice(index,1);
				 
				 
			 }
			 
			 
			 
		 });
		 
		 
		 localStorage.setItem('books',JSON.stringify(books));
		 
	 }
	 
	 
	 
 }






  class UI{
	  
	  
	  addToBookList(book){
		  
		  const list = document.getElementById('book-list');
		 
		const row = document.createElement('tr');
		 
		row.innerHTML = 
			`<td>${book.title}</td>

             <td>${book.author}</td>

             <td>${book.isbn}</td>

             <td><a href='#' class='delete'>X<a></td> 
                `;
		 
		 
		 list.appendChild(row);
		 
		  
		  
		  
	  } 
	  
	
	  clearFields(){
		  
		  
		  
		    document.getElementById('tittle').value = '';
	 
	  document.getElementById('author').value = '';
	 
	  document.getElementById('isbn').value = '';
		  
	  }
	  
	  
	  
	  
	  deleteBook(target){
		  
		  
		  	  
	  if(target.className == 'delete'){
		  
		  
		  
		  target.parentElement.parentElement.remove();
		  
		  
	  }
		  
		  
		  
	  }
	  
	  
	  showAlert(message,className){
		  
		    const div = document.createElement('div');
	  
	  const container1 = document.querySelector('.container');
	  
	  div.className = `alert ${className}`;
	  
	  div.appendChild(document.createTextNode(message));
	  
	  const form = document.querySelector('#book-form');
	  
	  container1.insertBefore(div,form);
	  
	  
	  setTimeout(function(){
		  
		 document.querySelector('.alert').remove(); 
		  
		  
		  
	  },3000);
		  
	  }
	  
  } 

       


  

  document.addEventListener('DOMContentLoaded',Store.getDisplay);
  
  document.getElementById('book-form').addEventListener('submit',function(e){
	  
	 
	  const title = document.getElementById('tittle').value,
	  
	         author = document.getElementById('author').value,
	  
	         isbn = document.getElementById('isbn').value;
	  
	  
	 const book = new Book(title,author,isbn);
	  
	 const ui = new UI();
	  
	 console.log(ui); 
	 	  
	  
	  
	  if(title === '' || author === '' || isbn === '')
		  {
			  
			  ui.showAlert('Plaese fill all the blanks','error');
			  
			 
			  
		  }
	  
	  
	       else{
			   
			   
			   
			   
			   
               	   ui.addToBookList(book);
	 
	               Store.addBook(book); 
			   
			       ui.showAlert('Book Added!','success'); 
			   
			            
			   
			    
			       ui.clearFields(); 
		   
			   
			   
		   
		   
		   
		   }
	  
	  
	  
	  

	  
	  
	  
	  e.preventDefault();
	  
	  
	  
	  
	  
	  
  });  


    document.getElementById('book-list').addEventListener('click',function(e){
		
		
		const ui = new UI();
		
		ui.deleteBook(e.target);
		
		Store.removeBookFromLocalStorage(e.target.parentElement.previousElementSibling.textContent);
		
		ui.showAlert('Book Deleted!','success');
		
		
		
		
		
		e.preventDefault();
		
		
		
	});   



