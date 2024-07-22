// const express = require('express');
// //const { request } = require('http');
// const app = express();
// const path =request('path');

// app.set('views',path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// const comments = [
//     {
//         usernmae: 'todd',
//         comment:'haha realy funny'
//     },
//     {
//         usernmae: 'miki',
//         comment:'my cat loves this shit '
//     },
//     {
//         usernmae: 'abel',
//         comment:'haha realy pls, delet ur acc'
//     },
//     {
//         usernmae: 'totolosadd',
//         comment:'useless and un interesting content'
//     },
// ]

// app.get ('/comments', (req, res) => {
//     res.render('comments/index')

// } )


// app.listen(3000,()=> { 
//     console.log("Listinig on PORT 3000")

const express = require('express');
const path = require ('path');

const app = express();
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


const comments = [
    {
        usernmae: 'todd',
        comment:'haha realy funny'
    },
    {
        usernmae: 'miki',
        comment:'my cat loves this shit '
    },
    {
        usernmae: 'abel',
        comment:'haha realy pls, delete ur acc'
    },
    {
        usernmae: 'totolosadd',
        comment:'useless and un interesting content'
    },
]

app.get('/comments', (req, res) => {
    res.render('comments/index')

} )

app.listen(3000,()=> { 
    console.log("Listinig on PORT 3000")
})