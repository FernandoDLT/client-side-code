const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

const rappers = {
    'superman': {
        'age': 250,
        'birthName': 'Kal-El, AKA Clark Kent',
        'birthLocation': 'Krypton'
    },
    'batman': {
        'age': 50,
        'birthName': 'Bruce Wayne',
        'birthLocation': 'Gotham City, New Jersey, USA'
    },
    'spiderman': {
        'age': 22,
        'birthName': 'Peter Parker',
        'birthLocation': 'Queens, New York City, USA'
    },
    'the hulk': {
        'age': 0,
        'birthName': 'Bruce Banner',
        'birthLocation': 'Dayton, Ohio, USA',
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown',
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const rapperName = request.params.name.toLocaleLowerCase()
    if( rappers[rapperName] ){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])    
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Better go catch it!`)
})
