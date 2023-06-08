/**
 * @Author: Your name
 * @Date:   2023-03-22 14:46:31
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-06-04 23:30:02
 */

const setEditModal = async (id) => {
  const xhttp = new XMLHttpRequest();
  console.log(id);
  xhttp.open("GET", `http://localhost:3000/api/getOne/${id}`, false);
  xhttp.send();

  const book = JSON.parse(xhttp.responseText);

  const { name, description, type } = book;

  // // Filling information about the book in the form inside the modal
  // document.getElementById('id').value = id;
  document.getElementById("name").value = name;
  document.getElementById("description").value = description;
  document.getElementById("type").value = type;

  // Setting up the action url for the book
  document.getElementById(
    "editForm"
  ).action = `http://localhost:3000/api/update/${id}`;
};

const deleteBook = async (id) => {
  console.log(id);
  const xhttp = new XMLHttpRequest();

  xhttp.open("DELETE", `http://localhost:3000/api/delete/${id}`, false);
  xhttp.send();

  // Reloading the page
  location.reload();
};

var min = 12,
  max = 100,
  select = document.getElementById("type");
for (var i = min; i <= max; i++) {
  var opt = document.createElement("object");
  opt.value = i;
  opt.innerHTML = i;
  select.appendChild(opt);
}

// const loadBooks1 = (apiUrl) => {
//     const xhttp = new XMLHttpRequest();

//     xhttp.open("GET", apiUrl, false);
//     xhttp.send();

//     const books = JSON.parse(xhttp.responseText);
//     console.log(books)
//     // rest of the function remains the same
// }

// const loadData = () => {
//     const selectedApi = document.getElementById("apiSelect").value;
//     let apiUrl;
//     if (selectedApi === "api1") {
//       apiUrl = "http://localhost:3000/api/getAllO";
//     } else if (selectedApi === "api2") {
//       apiUrl = "http://localhost:3000/api/getAllC";
//     }
//     loadBooks(apiUrl);
//   }

const loadBooks = () => {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "http://localhost:3000/api/getAll", false);
  xhttp.send();

  const books = JSON.parse(xhttp.responseText);
  console.log(books);
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
                    data-target="#editBookModal" onClick="setEditModal('${book._id}')">
                    Edit
                </button>
            </div>
        </div>
    </div>

    
        `;

    document.getElementById("books").innerHTML =
      document.getElementById("books").innerHTML + x;
  }
};

loadBooks();
// loadData();

// populate_container_selector();
