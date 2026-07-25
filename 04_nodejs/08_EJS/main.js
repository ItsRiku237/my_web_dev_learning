// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

let express = require('express');
let app = express();

const port = 3000;

// with the help of ejs we can use single html navbar in multiple pages like aboutPage,contactPage and so on....
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = [23 ,34 ,"Hiy"]
    res.render('index', { siteName : siteName , searchText : searchText  ,arr});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});