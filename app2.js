const http = new EasyHTTP();

//GET Users
// http
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

const data = {
  name: 'Zeeshan',
  userName: 'zeeshan123',
  email: 'johndoe@gmail.com'
};

//POST
http
  .post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));
