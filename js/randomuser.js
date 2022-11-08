const loaduser = () => {
    const url = 'https://randomuser.me/api/';
    fetch(url)
        .then(res => res.json())
        .then(data => showuserData(data.results[0]))
}

const showuserData = datas => {
    const userDiv = document.getElementById('commentDiv');
    console.log(datas)
    const eachdata = document.createElement('div');
    eachdata.classList.add('eachdata');
    eachdata.innerHTML = `
    <img src='${datas.picture.large}'>
    <h1>${datas.name.first}</h1>
    `;
    userDiv.appendChild(eachdata);
}

