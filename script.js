// let ulist = document.getElementById("ulist");

// console.log(ulist);

const getUsers = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await users.json();
  document.getElementById("ulist").innerHTML += `
    <li>Name: ${data[0].name}; Phone:  ${data[0].phone}</li>
    <li>Name: ${data[1].name}; Phone: ${data[1].phone}</li>
    <li>Name:${data[2].name};  Phone: ${data[2].phone}</li>
    <li>Name:${data[3].name};  Phone: ${data[3].phone}</li>
    <li>Name:${data[4].name};  Phone: ${data[4].phone}</li>
    <li>Name:${data[5].name};  Phone: ${data[5].phone}</li>
    <li>Name:${data[6].name};  Phone: ${data[6].phone}</li>
    <li>Name:${data[7].name};  Phone: ${data[7].phone}</li>
    <li>Name:${data[8].name};  Phone: ${data[8].phone}</li>
    <li>Name:${data[9].name};  Phone: ${data[9].phone}</li>
    `;

  //   console.log(data[9].name);
  return data;
};
getUsers();
