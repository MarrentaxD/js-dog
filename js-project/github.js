let info = document.querySelector('#info');
let busca = document.querySelector('#busca');
let raca = document.querySelector('#raca');

busca.addEventListener('click', getDog);

function getDog(){

    info.innerHTML = '';

    axios.get(`https://dog.ceo/api/breed/${raca.value}/images`)
    .then(function (response) {
        console.log(response);
        
            
            response.data.message.forEach(element => {
                    
                    const avatar = document.createElement('img');
                    avatar.style.width = '200px';
                    avatar.style.height = '200px';
                    avatar.src = element;
                    info.appendChild(avatar);
                    
            });



 


    })
    .catch(function (error) {
      console.log(error);

      const err = document.createElement('p');
      err.innerHTML = 'Nenhum dado foi encontrado'
      info.appendChild(err);
      
    });


}
