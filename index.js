let http   = require('http');
let m_date = require('./mod_date');
et fs     = require('fs');
 
function onRequest(request, response)
{
	response.writeHead(200, {'Content-Type': 'text/html'});
	console.log('Header set to txt/html');
	let page = (request.url == '/') ? '/index' : request.url;	
	console.log(page);	

	fs.readFile('.'+ page + '.html', null, function(error, data) {
		if (error)
		{
			response.writeHead(404);
			response.write('Page not found');
		}
		else {
			response.write(data);
		}
		response.end();
	});
}

http.createServer(onRequest).listen(1337, '127.0.0.1');
