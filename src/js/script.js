var Database = {
    keyName: "Mutant Database",
    data: []
};

function loadDataSource() {
    let storedData = localStorage.getItem(Database.keyName); 
    if (storedData) {
        Database.data = JSON.parse(storedData);
    }
    displayData(Database.data); 
}




function displayData(dataArray) {


}

loadDataSource();
