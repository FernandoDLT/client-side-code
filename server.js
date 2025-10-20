const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use('/js', express.static(path.join(__dirname, 'js')));
// app.use('/css', express.static(path.join(__dirname, 'css')));

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'eminem': {
        'age': 50,
        'birthName': 'Marshall Bruce Mathers III',
        'birthLocation': 'Detroit, Michigan, USA'
    },
    'dr. dre': {
        'age': 57,
        'birthName': 'Andre Romelle Young',
        'birthLocation': 'Compton, California, USA'
    },
    'unknown': {
        'age': 0,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan, Connecticut'
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
