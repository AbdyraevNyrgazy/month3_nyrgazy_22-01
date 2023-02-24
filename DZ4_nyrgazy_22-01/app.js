const btn = document.querySelector('.get')
const box = document.querySelector('.wrapper')
btn.addEventListener('click',()=>{
    const request = new XMLHttpRequest();
    request.open("GET","data.json");
    request.setRequestHeader("Content-Type","application.json");
    request.send();
    request.addEventListener("load",()=>{
        const data = JSON.parse(request.response)
        data.forEach(i => {
            const block = document.createElement('div')
            block.innerHTML = `
            <div class="card">
                <img class="card_img" src="${i.photo}" alt="">
                <p>${i.title}</p>
                <span>${i.price}</span>
            </div>
            `
            box.append(block)
        })
    });
});

