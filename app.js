// JavaScript Document



function Book(title,author,isbn){
	
	
	
	this.title = title;
	
	this.author = author;
	
	this.isbn = isbn;
	
	
	
	
	
	
}


 function UI(){}


  UI.prototype.showAlert = function(message,className){
	  
	  
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


  
  UI.prototype.deleteBook = function(target){
	  
	  
	  
	  if(target.className == 'delete'){
		  
		  
		  
		  target.parentElement.parentElement.remove();
		  
		  
	  }
	  
	  
	  
  }
  
  
  


 UI.prototype.clearFields = function(){
	 
	 
	  document.getElementById('tittle').value = '';
	 
	  document.getElementById('author').value = '';
	 
	  document.getElementById('isbn').value = '';
	 
	 
	 
 }







     UI.prototype.addToBookList = function(book){
		 
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



  document.getElementById('book-form').addEventListener('submit',function(e){
	  
	 
	  const title = document.getElementById('tittle').value,
	  
	         author = document.getElementById('author').value,
	  
	         isbn = document.getElementById('isbn').value;
	  
	  
	 const book = new Book(title,author,isbn);
	  
	 const ui = new UI();
	  
	 	  
	  
	  
	  if(title === '' || author === '' || isbn === '')
		  {
			  
			  ui.showAlert('Plaese fill all the blanks','error');
			  
			 
			  
		  }
	  
	  
	       else{
			   
			   
			   
			   
			   
               	   ui.addToBookList(book);
	 
	               ui.showAlert('Book Added!','success'); 
			   
			        
			   
			    
			       ui.clearFields(); 
		   
			   
			   
		   
		   
		   
		   }
	  
	  
	  
	  

	  
	  
	  
	  e.preventDefault();
	  
	  
	  
	  
	  
	  
  });  


    document.getElementById('book-list').addEventListener('click',function(e){
		
		
		const ui = new UI();
		
		ui.deleteBook(e.target);
		
		ui.showAlert('Book Deleted!','success');
		
		
		
		
		
		e.preventDefault();
		
		
		
	});   



