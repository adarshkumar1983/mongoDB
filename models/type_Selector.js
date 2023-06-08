/**
 * @Author: Your name
 * @Date:   2023-05-07 16:55:32
 * @Last Modified by:   Your name
//  * @Last Modified time: 2023-05-07 18:49:37
//  */
// const typeSelector = document.getElementById("type-selector");

// typeSelector.addEventListener("change", () => {
//   const selectedType = typeSelector.value;

//   // Make an API request to the appropriate endpoint based on the selected type
//     if (selectedType === "object") {
//     makeApiRequest("http://localhost:3000/api/getAllO");
//   } else if (selectedType === "container") {
//     makeApiRequest("http://localhost:3000/api/getAllC");
//   }
// });

// function makeApiRequest(url) {
//   get("http://localhost:3000/api/getAll")
//     .then(response => response.json())
//     .then(data => {
//       // Do something with the returned data
//       console.log(data);
//     })
//     .catch(error => console.error(error));
// }

// const loadBooks = (apiUrl) => {
//     const xhttp = new XMLHttpRequest();

//     xhttp.open("GET", apiUrl, false);
//     xhttp.send();

//     const books = JSON.parse(xhttp.responseText);
//     console.log(books)
//     // rest of the function remains the same
// }

// const loadData = () => {
//   const selectedApi = document.getElementById("apiSelect").value;
//   let apiUrl;
//   if (selectedApi === "api1") {
//     apiUrl = "http://localhost:3000/api/getAllO";
//   } else if (selectedApi === "api2") {
//     apiUrl = "http://localhost:3000/api/getAllC";
//   }
//   loadBooks(apiUrl);
// }

// const loadBooks = () => {
//     const type = document.getElementById('type').value;
  
//     // let url = "http://localhost:3000/api/getAll";
//     if (type === "object") {
//       url = `http://localhost:3000/api/getAllO`;
//     }else if (type === "container") {
//         url = `http://localhost:3000/api/getAllC`;
//     }
//     const xhttp = new XMLHttpRequest();
//     xhttp.open("GET", url, false);
//     xhttp.send();
  
//     const books = JSON.parse(xhttp.responseText);
//     console.log(books)
//     let html = "";
//     for (let book of books) {
//       html += `
//         <div class="col-4">
//           <div class="card">
//             <div class="card-body">
//               <h5 class="card-title">${book._id}</h5>
//               <h5 class="card-title">${book.name}</h5>
//               <h6 class="card-subtitle mb-2 text-muted">${book.description}</h6>
//               <div>Type: ${book.type}</div>
//               <hr>
//               <button type="button" class="btn btn-danger" onClick="deleteBook('${book._id}')">Delete</button>
//               <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editBookModal" onClick="setEditModal('${book._id}')">
//                 Edit
//               </button>
//             </div>
//           </div>
//         </div>
//       `;
//     }
  
//     document.getElementById('books').innerHTML = html;
//   }
//   loadBooks();


// const filterItems = () => {
//     const filterBy = document.getElementById("type").value;
  
//     let apiUrl = "";
//     switch (filterBy) {
//       case "object":
//         apiUrl = "http://localhost:3000/api/getAllO";
//         break;
//       case "container":
//         apiUrl = "http://localhost:3000/api/getAllC";
      
//     }
  
//     const xhttp = new XMLHttpRequest();
//     xhttp.open("GET", apiUrl, false);
//     xhttp.send();
  
//     const items = JSON.parse(xhttp.responseText);
//     console.log(items);
  
//     const itemsHtml = items
//       .map(
//         (item) => `
//         <div class="col-4">
//           <div class="card">
//             <div class="card-body">
//               <h5 class="card-title">${item._id}</h5>
//               <h5 class="card-title">${item.name}</h5>
//               <h6 class="card-subtitle mb-2 text-muted">${item.description}</h6>
//               <div>${type}: ${item[type]}</div>
  
//               <hr>
  
//               <button type="button" class="btn btn-danger" onClick="deleteItem('${item._id}')">Delete</button>
//               <button types="button" class="btn btn-primary" data-toggle="modal"
//                 data-target="#editItemModal" onClick="setEditModal('${item._id}')">
//                 Edit
//               </button>
//             </div>
//           </div>
//         </div>
//       `
//       )
//       .join("");
  
//     document.getElementById("items").innerHTML = itemsHtml;
//   };
//    filterItems ();


const loadBooks = (type) => {
    let apiUrl = "";
  
    if (type === "object") {
      apiUrl = "http://localhost:3000/api/getAllO";
    } else if (type === "container") {
      apiUrl = "http://localhost:3000/api/getAllC";
    }
  
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", apiUrl, false);
    xhttp.send();
  
    const books = JSON.parse(xhttp.responseText);
  
    for (let book of books) {
      const x = `
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${book._id}</h5>
              <h5 class="card-title">${book.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${book.description}</h6>
              <div>Type: ${book.type}</div>
              <hr>
              <button type="button" class="btn btn-danger" onClick="deleteBook('${book._id}')">Delete</button>
              <button types="button" class="btn btn-primary" data-toggle="modal"
                data-target="#editBookModal" onClick="setEditModal('${book._id}')">Edit</button>
            </div>
          </div>
        </div>
      `;
  
      document.getElementById('books').innerHTML = document.getElementById('books').innerHTML + x;
    }
  }
  
  const typeSelect = document.getElementById('typeSelect');
  
  typeSelect.addEventListener('change', (event) => {
    const selectedType = event.target.value;
    document.getElementById('books').innerHTML = '';
    loadBooks(selectedType);
  });
  
  loadBooks('object'); // Load object books by default
  
  loadBooks();