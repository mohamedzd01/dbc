
export default function getLocalStorgeItem(key,val1,val2,forLang){
    let isDark,isAr;
    if(!localStorage.getItem(key)){
        localStorage.setItem(key,val1);  
        if(!forLang){
            document.body.setAttribute(key,val1);
            val1 == "dark" ? isDark = true : isDark = false;
            setDarkIcon(isDark);
        }else{
            document.body.setAttribute("dir",val1 == "an"?"ltr":"rtl");
            isAr = false;
            document.querySelector("header .options .lang").innerHTML = val1;
        }
    }else{
        if(localStorage.getItem(key) == val1){
            
            if(!forLang){
                document.body.setAttribute(key,val1);
                 isDark = false;
                document.body.setAttribute(key,val1);
                val1 == "dark" ? isDark = true : isDark = false;
                setDarkIcon(val1 == "dark" ? true : false)
            }else{
                document.body.setAttribute("dir",val1 == "an"?"ltr":"rtl");
                isAr = false;
                document.querySelector("header .options .lang").innerHTML = val1;
            }
        }else{
            

            if(!forLang){
                document.body.setAttribute(key,val2);
               document.body.setAttribute(key,val2);
               val2 == "dark" ? isDark = true : isDark = false;
               setDarkIcon(isDark)
               
            }else{
                document.body.setAttribute("dir",val2 == "an"?"ltr":"rtl");
                document.querySelector("header .options .lang").innerHTML = val2;
                isAr = true;
            }
        }
    }
    return  forLang? isAr : isDark;
}

let setDarkIcon=(isDark)=>{
    let darkMode = document.querySelector("header .options .mode");
    if(isDark){
        darkMode.classList.add("uil-moon")
    }else{
        darkMode.classList.add("uil-sun");
    }
  
}



export function  setDark(isDark){
    let darkMode = document.querySelector("header .options .mode");
    darkMode.addEventListener("click",(e)=>{
        if(isDark){
            localStorage.setItem("mode","light");
            document.body.setAttribute("mode","light");
            e.currentTarget.classList.replace("uil-moon","uil-sun")
         isDark = false;
          }else{
              localStorage.setItem("mode","dark");
          document.body.setAttribute("mode","dark");
          e.currentTarget.classList.replace("uil-sun","uil-moon")
         isDark = true;
          }
          return isDark;
    })
    
    
}
export function setLang(isAr,xhr){
    let lang = document.querySelector("header .options .lang");
    lang.addEventListener("click",(e)=>{
    if(isAr){
        localStorage.setItem("lang","an");
        document.body.setAttribute("dir","ltr");
       isAr = false;
       e.currentTarget.innerHTML = "an";
       xhr.setLang("an")
       
    }else{
    localStorage.setItem("lang","ar");
    document.body.setAttribute("dir","rtl");
    e.currentTarget.innerHTML = "عر";
    xhr.setLang("ar")
     isAr = true;
    }

    return isAr;
})
}