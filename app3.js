// const cars = JSON.parse(localStorage.getItem('cars')) || [];

// cars.forEach(function(car) {
//   $('#cars tbody').append(`
//     <tr>
//       <td>${car.firstname}</td>
//       <td>${car.lastname}</td>
//       <td>${car.username}</td>
//       <td>${car.carmodel}</td>
//       <td>${car.state}</td>
//       <td>${car.feature}</td>
//     </tr>`
//   );
// });

// $('#sign-in').on('click', function() {
//   const firstname = $('#firstname').val();
//   const lastname = $('#lastnamed').val();
//   const username = $('#username').val();
//   const carmodel = $('#carmodel').val();
//   const state = $('#state').val();
//   const feature = $('#feature').val();
//   cars.push({ firstname, lastname, username,carmodel, state, feature  });
//   console.log(cars);
//   localStorage.setItem('cars', JSON.stringify(cars));
//   location.href = 'device-list.html';
// });

// if(username== Ojasvi_07 && password== Ojasvi4807)
// {

// }

// if(username== Bhumika_57 && password== Bhumika4757)
// {
    
// }

// if(username== Mehak_72 && password== Mehak4772)
// {
    
// }

  $('#login-form').submit(function(event) {
    event.preventDefault(); // prevent the default form submission

    var username = $('#username').val();
    var password = $('#password').val();

    // check if the username and password are correct
    if (username == 'Ojasvi' && password == 'ojasvi4807') 
    {
      window.location.href = 'Ojasvi.html'; 
    } 

    else if (username == 'Bhumika' && password == 'bhumika4757') 
    {
      window.location.href = 'Bhumika.html'; 
    }

    else if (username == 'Mehak' && password == 'mehak4772') 
    {
      window.location.href = 'Mehak.html'; 
    }

    else 
    {
      alert('Invalid username or password');
    }
  });





