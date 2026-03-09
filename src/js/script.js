var Database = {
    keyName: "Mutant Database",
    data: []
};

function loadDataSource() {
    let dataString = localStorage.getItem(Database.keyName);

    if (dataString) {
        let parsedData = JSON.parse(dataString);
        Database.data = parsedData;
    }
    displayData(Database.data); 
}

function displayData(dataArray) {
    console.log(dataArray.response); 

document.querySelector(".mutant-container").innerHTML = "";

    var root = dataArray.response;

    root.forEach( (character) => {

        HTML = `<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

      <div class="col">
        <div class="card shadow-lg">
          <img src= "  ${character.image}" >
          <div class="card-body">
            <h5 class="card-title text-center mb-3">${character.name.alias}  <h2>   
            ${character.name.firstName}
${character.name.lastName}   </h2>


     
            <p class="card-text text-center text-muted"></p>

            <h6 class="fw-bold">
               
                           ${character.affiliation}
            
            
            
            
            
            </h6>
            <ul class="list-unstyled">
              <li>
              ${character.profile.gender}
      
              </li>
            </ul>

            <h2 class="fw-bold"></h2>
            <ul class="list-unstyled">
              <li> ${character.profile.eyes}</li>
                <li>   ${character.profile.hair}</li>
                 <li>  ${character.profile.height}</li>
                  <li> ${character.powers}</li>
            </ul>

            <h6 class="fw-bold"></h6>
            <ul class="list-inline">
              <li class="list-inline-item badge bg-primary"></li>
            </ul>
          </div>
        </div>
      </div>

    </div>`;
    document.querySelector(".mutant-container").insertAdjacentHTML("beforeend", HTML);

    });
}

loadDataSource();
