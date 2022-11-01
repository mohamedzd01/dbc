

import CreateSections from './CreateSections.js'
export default class XHR {
    constructor(lang,spc){
        this.lang = lang;
        this.spc = spc;
    }
    newXHR(){
        console.log(this.lang,this.spc);
        fetch(`./data/${this.lang}/${this.spc}.json`).then((res)=> res.json()).then((data)=>{
           CreateSections.createInfosHeader(data.specialty,data.definition);
           console.log(data);
            this.setSteps(CreateSections.createSteps(data.steps))
            
        })
    }
    setLang(lang){
        this.lang = lang;
        this.newXHR()
    }
    setSpeciality(spc){
        this.spc = spc;
        this.newXHR()
    }
    setSteps(content){
        document.querySelector(".infos .road-map .steps").innerHTML = content;
    }
    
    
    
}
