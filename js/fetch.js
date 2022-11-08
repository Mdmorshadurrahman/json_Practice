const showComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => commentDatas(data))
}
const commentDatas = Datas => {
    const getComments = document.getElementById('commentDiv');
    Datas.forEach(Data => {
        const commentDivs = document.createElement('div');
        commentDivs.classList.add('comments');
        commentDivs.innerHTML = `
        <h1>Comment Id : ${Data.id}</h3>
        <h4>Email Address : ${Data.email}</h4>
        <button onclick="loadCommentDetails(${Data.id})">Get Details</button>
        `;
        getComments.appendChild(commentDivs);
    });

}
const loadCommentDetails = (ID) => {
    const url = `https://jsonplaceholder.typicode.com/comments/${ID}`;
    console.log('commenter\'s name:', ID);
    fetch(url)
        .then(res => res.json())
        .then(data => commenterDetails(data.name))
}

const commenterShow = (name) => {
    console.log(name);
}
const commenterDetails = details => {
    const commentsdetails = document.getElementById('display');
    commentsdetails.innerHTML = `
    <h1>Name : ${details}</h1>
    `;
}