const publishBtn = document.getElementById("publish-btn");
const postText = document.getElementById("post-text");
const mainFeed = document.getElementById("main-feed");

console.log("JS cargado correctamente");

publishBtn.addEventListener("click", function () {

    const textContent = postText.value.trim();

    if (textContent === "") {
        alert("Escribe algo antes de publicar");
        return;
    }

    const newPost = document.createElement("article");

    newPost.classList.add("post");

    newPost.innerHTML = `
        <div class="post-header">
            <div class="avatar" style="background:#4CAF50;">
                TU
            </div>

            <div>
                <strong>Tu Nombre</strong>
                <p>Estudiante • Ahora mismo</p>
            </div>
        </div>

        <p>${textContent}</p>
    `;

    mainFeed.prepend(newPost);

    postText.value = "";

});