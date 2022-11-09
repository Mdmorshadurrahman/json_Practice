const get_details = () => {
    const firstname = document.getElementById('input-firstname');
    const lastname = document.getElementById('input-lastname');
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${firstname.value}%20${lastname.value}`;
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => show_details(data.player[0]))
}

const show_details = (details) => {
    const imageDiv = document.getElementById('image');
    const infoDiv = document.getElementById('info');
    imageDiv.style.backgroundColor = 'lightgray';
    imageDiv.innerHTML = `
    <img src='${details.strRender}'>
    `;
    infoDiv.style.backgroundColor = 'aqua';
    infoDiv.innerHTML = `
    <h1>${details.strPlayer}</h1>
    <h4>Position: ${details.strPosition}</h4>
    <h4>Club Team: ${details.strTeam}</h4>
    <h4>Height: ${details.strHeight}</h4>
    <h4>Nationality: ${details.strNationality}</h4>
    <h4>Birth Location: ${details.strBirthLocation}</h4>
    <h4>Bio: ${details.strDescriptionEN.slice(0, 200)}</h4>
    `;
} 