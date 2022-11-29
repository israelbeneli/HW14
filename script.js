let commentsArrey =[
    {
        "postid": 1,
      "comment": "yes its greate"
    },
    {
        "postid": 1,
      "comment": "no is ridiculous"
    },
    {
        "postid": 3,
      "comment": "i dont think so"
    }]; 
let postArrey=[
    {
        "id": 1,
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "id": 2,
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "id": 3,
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }];
    
let posts = new Promise((resolve)=>{
        resolve(postArrey);
});
let comments = new Promise((resolve)=>{
        resolve(commentsArrey);
});
function printToHtml(somthing){
    let newElementToPrint = document.createElement("p");
    newElementToPrint.innerText = somthing;
    document.body.appendChild(newElementToPrint);
}
function printpost(arreyposts){
    arreyposts.forEach(post => {
        printToHtml(post.body);
        printcomments(post);  
    });
}
function printcomments(post){          
    commentsArrey.forEach(comment =>{
        if (comment.postid == post.id){
            printToHtml(comment.comment);
        }
    });
}

posts.then(printpost).then(comments.then(printcomments));



