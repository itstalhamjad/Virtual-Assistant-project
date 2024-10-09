let btn=document.querySelector("#btn")
let content=document.querySelector("#content")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    // text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hour>=0 && hours<12){
        speak("Good morning Sir")
    }
    else if(hour>=12 && hours<16){
        speak("Good after noon Sir")
    }
    else {
        speak("Good evening Sir")
    }
}

// window.addEventListner('load',()=>{
//     wishMe
// })
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
        let currentIndex=event.resultIndex
        let transcript=event.results[currentIndex][0].transcript
        content.innerText=transcript
        takeCommand(transcript.toLowerCase())
    }

    btn.addEventListener("click",()=>{
        recognition.start()
        btn.style.display="none"
        voice.style.display="block" 
    })
    function takeCommand(message){
        btn.style.display="flex"
        voice.style.display="none"
        if(message.includes("hello")||message.includes("hey")){
            speak("hello sir, what can i help you?")
            }
            else if(message.includes("who are you")){
                speak("i am virtual assistant, created by mister Talha ")
            }
            else if(message.includes("who is servicing")){
                speak("Sir Waseem is a full stack senior software engineer with 5 years of experince and your ASP.NET core trainer and i hope you enjoy the study method of sir waaseem ")
            }
            else if(message.includes("open youtube")){
                speak("Ok i opening the youtube")
                window.open("https://www.youtube.com/","_blank")
            }
            else if (message.includes("open instagram")){
                speak("Ok i opening the Instagram")
                window.open("https://www.instagram.com/","_blank")
            }
            else if (message.includes("open facebook")){
                speak("Ok i opening the facebook")
                window.open("https://www.facebook.com/","_blank")
            }
            else if (message.includes("open google")){
                speak("Ok i opening the google")
                window.open("https://www.google.com","_blank")
            }
            else if (message.includes("open Vistual Studio Code")){
                speak("Ok i opening the Vistual Studio code")
                window.open("c:\Users\TALHA\Desktop\Visual Studio Code.lnk","_blank")
            }
            else if (message.includes("open WhatsApp")){
                speak("Ok i opening the Whatsapp")
                window.open("https://www.whatsapp.com/","_blank")
            }
            else if (message.includes("open calculator")){
                speak("Ok i opening the calculator")
                window.open("calculator://")
            }
            else if (message.includes("File Explorer")){
                speak("Ok i opening the calculator")
                window.open("File Explorer://")
            }
            else if (message.includes("what is time")){
                let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
                speak(time)           
            }
            else if (message.includes("what is date")){
                let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
                speak(date)           
            }
            else{
                let finalText="this is what i found on internet regarding" + message.replace("maan","")||message.replace("naan","")
                speak(finalText)
                window.open(`https://www.google.com/search?q=${message.replace("maan","")||message.replace("naan","")}`,"_blank")
            }
    }
