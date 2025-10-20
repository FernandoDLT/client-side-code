document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
   const rapperName = document.querySelector('input').value.trim();

      if(!rapperName){ // checks if field is empty
         alert("Please enter a rapper's name")
         return;
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