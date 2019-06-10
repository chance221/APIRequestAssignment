'use strict'
const baseUrl = "https://api.github.com/users/"



function getAllRepos(searchUser){
    let searchUrl = `https://api.github.com/users/${searchUser}/repos`
    fetch(searchUrl, {mode:'cors'})
    .then(response=> response.json())
    .then(responseJson => lookThroughRepo(responseJson, searchUser))
    .catch(err=>{
        alert(`Something ant working  ${err.message}`);
    });
}



function watchForm(){
    $('form').submit(event=>{
        event.preventDefault()
        const searchUser = $('#js-userName').val()
        getAllRepos(searchUser);
    })
}


function lookThroughRepo(responseArray, searchUser){
    $('#results-list').empty();
    $('#results-list').append(`<h3>${searchUser} Repo Results</h3>`)
    for (let i =0; i < responseArray.length; i++){
        $('#results-list').append( `<li class="resultLi">
       <p>${responseArray[i].name}</p>
       </li>`)
       
       console.log(responseArray[i].name)
       
    }
    $('#results').removeClass('hidden')
}

$(watchForm);