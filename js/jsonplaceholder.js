const dataload = async () => {
    console.log("inside the dataload");
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const res = await fetch(url);
    const data = await res.json();
    getdetails(data.drinks);
}

const getdetails = details => {
    const searchDiv = document.getElementById('searchid');
    const cardDiv = document.getElementById('cards');
    const eachcard = document.createElement('div');
    eachcard.innerHTML = `
        <div class="card" style="width:25rem;margin-left:10px">
                        <img src="${details.strDrinkThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${details.strDrink}</h5>
                        </div>
        </div>
        `;
    cardDiv.appendChild(eachcard);
    console.log('inside the loop');
}
