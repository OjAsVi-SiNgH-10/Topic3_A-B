const lights = JSON.parse(localStorage.getItem('lights')) || [];

lights.forEach(function(light) {
  $('#lights tbody').append(`
    <tr>
      <td>${light.light_id}</td>
      <td>${light.location}</td>
    </tr>`
  );
});

$('#add-device').on('click', function() {
  const light_id = $('#light_id').val();
  const location = $('#location').val();
  lights.push({ light_id, location });
  console.log(lights);
  localStorage.setItem('lights', JSON.stringify(lights));
  location.href = 'device-list.html';
});






