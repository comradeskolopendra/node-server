const { error } = require('console');
const http = require('http');

const server = http.createServer();
const html = `
    <!doctype>
    <html>
        <head>
            <meta charset='UTF-8'>
            <title>node js basics</title>
            <link rel='stylesheet' type='text/css' href='app.css'></link>
        </head>
        <body>
            <h1>Node js basic server</h1>
            <button>Press on me</button>
            <script src='app.js'></script>
        </body>
    </html>
`;

const css = `
    body {
        margin: 0;
        padding: 0;
        text-align: center;
    }
    h1 {
        background-color: #43853d;
        color: white;
        padding: .5em;
        font-family: 'Consolas';
    }
`;

const js = `
    const button = document.querySelector('button');
    button.addEventListener('click', event => {alert('Node js are working on this alert')})
`;

server.on('request', (req, res) => {
    console.log(req.url)
    switch (req.url) {
        default:
            res.writeHead(404, { 'Content-type': 'text/plain' });
            res.end('конченая ошибка блять');
        case '/':
            res.writeHead(200, { 'Content-type': 'text/html'});
            res.end(html);
        case '/app.css':
            res.writeHead(200, {'Content-type': 'text/css'});
            res.end(css);
        case '/app.js':
            res.writeHead(200, { 'Content-type': 'text/javascript' });
            res.end(js);
    }
})

server.listen(3000, () => {
    console.log('server working')
})