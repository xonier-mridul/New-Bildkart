const chatbot = document.getElementById('chatbot');
const Send = document.getElementById('sendmsg');
const Input = document.getElementById('screenInput');
const botScreen = document.getElementById('screenmains');
const botcontainer = document.querySelector('.chatbotscreen');
const para = document.getElementById('headerpara');
const Overlay = document.getElementById('botoverlay')

const send = ()=>{
    if(Input.value === ""){
        return
    }
    let div = document.createElement('div');
    div.classList = "message";
    div.innerText = Input.value ;
    botScreen.appendChild(div);
    Input.value = ""
    setTimeout(() => {
        let bot = document.createElement('div');
        bot.classList = "botclass";
        bot.innerHTML = "Sorry, I'm under developmet &#128531;"
        botScreen.appendChild(bot)
        botScreen.scrollTop = botScreen.scrollHeight
    }, 1200);
    botScreen.scrollTop = botScreen.scrollHeight
}

Send.addEventListener('click',send)

chatbot.addEventListener('click', ()=>{
    const minut = new Date().getMinutes()
    const hours = new Date().getHours()
    const newminut = minut <= 9 ? `0${minut}` : minut
    const newhours = hours <= 9 ? `0${hours}` : hours

    let ampm = hours > 12 ? 'pm' : 'am';
    para.innerText = `we'll back today at ${newhours}:${newminut} ${ampm}`
    botcontainer.classList.toggle('chatbotscreenshow');
    Overlay.classList.toggle('botoverlayshow')
})

Input.addEventListener('keydown',(e)=>{
    if(e.key === "Enter"){
        send()
    }
    
})

Overlay.addEventListener('click',()=>{
    botcontainer.classList.remove('chatbotscreenshow');
    Overlay.classList.remove('botoverlayshow');
})