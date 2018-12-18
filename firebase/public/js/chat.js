document.getElementById("login").addEventListener("click", login);
document.getElementById("create-post").addEventListener("click", writeNewPost);


getPosts();

function login() {

    // https://firebase.google.com/docs/auth/web/google-signin
    
    // Provider
    var provider = new firebase.auth.GoogleAuthProvider();

    // How to Log In
    firebase.auth().signInWithPopup(provider).then(function(result){
        console.log("login");
        document.getElementById("login").classList.add("d-none");
        document.getElementById("create-post").classList.remove("d-none");
        document.getElementById("logout").classList.remove("d-none");
        getPosts();
        
    });


}


function writeNewPost() {

    // https://firebase.google.com/docs/database/web/read-and-write

    
    var textToSend = document.getElementById("textInput").value;
    // Values
    var message = {
        message: textToSend,
        name: firebase.auth().currentUser.displayName
    }

    console.log(message);
    
    
    firebase.database().ref('Competition').push(message)
    // A post entry.

    // Get a key for a new Post.

    //Write data

    console.log("write");
    
}


function getPosts() {

    firebase.database().ref('Competition').on('value', function (data) {
        var posts = document.getElementById("posts");
        posts.innerHTML = "";

        var messages = data.val();

        for (var key in messages) {
           var text = document.createElement("div");
            text.classList.add("card");
            text.classList.add("mb-2");
            text.classList.add("p-1");
            text.classList.add("bg-light");
           var element = messages[key];
           text.append(element.name+':'+'');
           text.append(element.message);
           posts.append(text);    }

     })

    console.log("getting posts");

}


