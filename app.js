// let ulist = document.getElementById("ulist");

// // console.log(ulist);

// const getUsers = async () => {
//   const users = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await users.json();
//   document.getElementById("ulist").innerHTML += `
//     <li>Name: ${data[0].name}; Phone:  ${data[0].phone}</li>
//     <li>Name: ${data[1].name}; Phone: ${data[1].phone}</li>
//     <li>Name:${data[2].name};  Phone: ${data[2].phone}</li>
//     <li>Name:${data[3].name};  Phone: ${data[3].phone}</li>
//     <li>Name:${data[4].name};  Phone: ${data[4].phone}</li>
//     <li>Name:${data[5].name};  Phone: ${data[5].phone}</li>
//     <li>Name:${data[6].name};  Phone: ${data[6].phone}</li>
//     <li>Name:${data[7].name};  Phone: ${data[7].phone}</li>
//     <li>Name:${data[8].name};  Phone: ${data[8].phone}</li>
//     <li>Name:${data[9].name};  Phone: ${data[9].phone}</li>
//     `;

//   //   console.log(data[9].name);
//   return data;
// };
// getUsers();

const getUsers = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await users.json();
  document.getElementById("ulist").innerHTML += `
  <div class = "global">
  <div class = "one">
   <h2>1</h2>

    <ul class ="main_info">
    <li><b>Name:</b> <span>${data[0].name}</span></li>
    <li><b>Phone:<b/> ${data[0].phone}</li>
    <li><b>username:</b> <span>${data[0].username}</span></li>
    <li><b>Website:</b><span>${data[0].website}</span></li>
    <li><b>email:<b/> <span>${data[0].email}</span></li>
    </ul><div/>
    <div class = "two">
    <h2>2</h2> 
    <ul class ="main_info">
    <li><b>Name:</b> <span>${data[1].name}</span></li>;
    <li><b>Phone:<b/> ${data[1].phone}</li>
    <li><b>username:</b> <span>${data[1].username}</span></li>
    <li><b>Website:</b><span>${data[1].website}</span></li>
    <li><b>email:<b/> <span>${data[1].email}</span></li>
    </ul>
    </div>
    <div class = "three">
    <h2>3</h2> 
    <ul class ="main_info">
    <li><b>Name:</b> <span>${data[3].name}</span></li>;
    <li><b>Phone:<b/> ${data[3].phone}</li>
    <li><b>username:</b> <span>${data[3].username}</span></li>
    <li><b>Website:</b><span>${data[3].website}</span></li>
    <li><b>email:<b/> <span>${data[3].email}</span></li>
    </ul>
    </div>
    </div>
    </div>
    <div class = "g1">
    <div class = "four">
    <h2>4</h2> 
    <ul class ="main_info">
    <li><b>Name:</b> <span>${data[2].name}</span></li>;
    <li><b>Phone:<b/> ${data[2].phone}</li>
    <li><b>username:</b> <span>${data[2].username}</span></li>
    <li><b>Website:</b><span>${data[2].website}</span></li>
    <li><b>email:<b/> <span>${data[2].email}</span></li>
    </ul>
    </div>

    <div class = "four">
    <h2>5</h2> 
    <ul class ="main_info">
    <li><b>Name:</b> <span>${data[4].name}</span></li>;
    <li><b>Phone:<b/> ${data[4].phone}</li>
    <li><b>username:</b> <span>${data[4].username}</span></li>
    <li><b>Website:</b><span>${data[4].website}</span></li>
    <li><b>email:<b/> <span>${data[4].email}</span></li>
    </ul>
    </div>



   </div>
    
    `;

  //   console.log(data[9].name);
  return data;
};

getUsers();
