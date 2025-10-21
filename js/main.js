document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
   const rapperName = document.querySelector('input').value.trim();
   const h2 = document.querySelector('h2');

   if (!rapperName) {
      h2.innerText = 'Please enter a Super Hero\'s name';
      h2.style.color = "red";
      return;
   } else { 
      h2.style.color = "rgb(18, 226, 18)";
   }
      try{
      const response = await fetch(`https://client-side-code.onrender.com/api/${rapperName}`)
      const data = await response.json()
      console.log(data)
         document.querySelector('h2').innerText = data.birthName
      }catch(error){ 
      console.log(error)
   }
}