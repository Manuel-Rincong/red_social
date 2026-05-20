
const publishBtn = document.getElementById('publish-btn');
const postText = document.getElementById('post-text');
const mainFeed = document.getElementById('main-feed');


publishBtn.addEventListener('click', () => {
    const textContent = postText.value.trim();

    
    if (textContent === "") {
        alert("¡Por favor, escribe algo antes de publicar!");
        return;
    }

    
    const newPost = document.createElement('article');
    newPost.classList.add('post');

    newPost.innerHTML = `
        <div class="post-header">
            <div class="avatar" style="background-color: #4CAF50; color: white;">TU</div>
            <div>
                <strong>Tu Nombre</strong>
                <p>Estudiante • Ahora mismo</p>
            </div>
        </div>
        <p>${textContent}</p>
    `;

    
    mainFeed.insertBefore(newPost, mainFeed.firstChild);

    
    postText.value = "";
});