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
    const detailsDiv = document.getElementById('details-section');
    const modeDiv = document.getElementById('mode');
    if (modeDiv.innerText === "Light-Mode") {
        detailsDiv.style.bordercolor = 'white';
        detailsDiv.style.borderWidth = '2px';
        detailsDiv.style.borderStyle = 'solid';
        imageDiv.style.backgroundColor = 'cyan';
        infoDiv.style.backgroundColor = 'lightgray';
        infoDiv.style.color = 'black';
    }
    else {
        detailsDiv.style.bordercolor = 'black';
        detailsDiv.style.borderWidth = '2px';
        detailsDiv.style.borderStyle = 'solid';
        imageDiv.style.backgroundColor = 'red';
        infoDiv.style.backgroundColor = 'black';
        infoDiv.style.color = 'white';
    }
    imageDiv.innerHTML = `
    <img src='${details.strRender}'>
    `;

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

const modechange = () => {
    const bodyDiv = document.getElementById('bodyid');
    const modeDiv = document.getElementById('mode');
    const hintDiv = document.getElementById('hint');
    const btnDiv = document.getElementById('btn-submit');
    const imageDiv = document.getElementById('image');
    const infoDiv = document.getElementById('info');
    const detailsDiv = document.getElementById('details-section');
    if (modeDiv.innerText === 'Dark-Mode') {
        bodyDiv.style.backgroundColor = 'black';
        modeDiv.innerText = 'Light-Mode';
        modeDiv.style.backgroundColor = 'white';
        modeDiv.style.color = 'black';
        hintDiv.style.color = 'white';
        btnDiv.style.bordercolor = 'white';
        imageDiv.style.backgroundColor = 'cyan';
        infoDiv.style.backgroundColor = 'lightgray';
        infoDiv.style.color = 'black';
    }
    else {
        bodyDiv.style.backgroundColor = 'white';
        modeDiv.innerText = 'Dark-Mode';
        modeDiv.style.backgroundColor = 'black';
        modeDiv.style.color = 'white';
        hintDiv.style.color = 'gray';
        btnDiv.style.bordercolor = 'black';
        imageDiv.style.backgroundColor = 'red';
        infoDiv.style.backgroundColor = 'black';
        infoDiv.style.color = 'white';
    }


}
