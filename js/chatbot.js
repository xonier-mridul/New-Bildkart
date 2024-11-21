const chatbot = document.getElementById('chatbot');
const Send = document.getElementById('sendmsg');
const Input = document.getElementById('screenInput');
const botScreen = document.getElementById('screenmains');
const botcontainer = document.querySelector('.chatbotscreen');
const para = document.getElementById('headerpara');
const Overlay = document.getElementById('botoverlay')

const send = ()=>{
    let div = document.createElement('div');
    div.classList = "message";
    div.innerText = Input.value ;
    botScreen.appendChild(div);
    Input.value = ""
}

Send.addEventListener('click',send)

chatbot.addEventListener('click', ()=>{
    const minut = new Date().getMinutes()
    const hours = new Date().getHours()
    const newminut = minut < 10 ? `0${minut}` : minut
    const newhours = minut < 10 ? `0${hours}` : hours

    let ampm = hours > 12 ? 'pm' : 'am';
    para.innerText = `we'll back today at ${newhours}:${newminut} ${ampm}`
    botcontainer.classList.toggle('chatbotscreenshow');
    Overlay.classList.toggle('botoverlayshow')
})



Input.addEventListener('onkeydown',(e)=>{
    if(e.key == "Enter"){
    }
    console.log(e.key)
})

Overlay.addEventListener('click',()=>{
    botcontainer.classList.remove('chatbotscreenshow');
    Overlay.classList.remove('botoverlayshow');
})