const fs = require('fs');
var currentPath = process.cwd();

const dir = './academy';

export default function handler(req, res) {
    const { codeContent , language } = req.body
    console.log(language, codeContent ,req.body,  currentPath)
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    // fs.writeFileSync(index.html, req.blob)

    // fs.appendFile('index.html', req.blob , function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    //   });
      
    
    res.status(200).json({ name: 'John Doe' })
  }
  