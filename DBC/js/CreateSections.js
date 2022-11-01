



export default class CreatSections{

    static createSteps(steps){
        let content ="";
        steps.forEach((step,i) => {
            content += this.createStep(step,i);
        });
        return content;
    }
    static createStep(step,i){
          return `
                <div class="step ${i%2 ==0? "left" : "right"}">
                  <h4 class="title">${step.title}</h4>
                  <p class="description">${step.description}</p>
                  <p class="resoures"></p>
                </div>
              ${ i%2 ==0 ?  "<div class='clear'></div>" : ""}
          `
    }
    static createInfosHeader(title,definition){
        document.querySelector(".infos .container > .title").innerHTML = title;
        document.querySelector(".infos .container > .difinition").innerHTML = definition;

    }


}