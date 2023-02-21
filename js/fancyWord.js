const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = c => {
  const elements = document.getElementsByClassName(c);
  
  for (var i = 0; i < elements.length; i++) {
    let element = elements[i];

    const text = element.innerText.split("");

    element.innerText = "";
  
    text.forEach((value, index) => {
      const outer = document.createElement("span");
      
      outer.className = "outer";
      
      const inner = document.createElement("span");
      
      inner.className = "inner";
      
      inner.style.animationDelay = `${rand(-5000, 0)}ms`;
      
      const letter = document.createElement("span");
      
      letter.className = "letter";
      
      letter.innerText = value;

      if(value === " "){
        letter.innerText = "B"; // random letter
        letter.style.opacity = 0;
      }
      
      letter.style.animationDelay = `${index * 1000}ms`;
      
      inner.appendChild(letter);    
      
      outer.appendChild(inner);    
      
      element.appendChild(outer);
    });
  }
}

enhance("special-link");
