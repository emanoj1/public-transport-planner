const http = require('http');
const { parse } = require('querystring');
const axios = require('axios');

const PORT = 5000;

const requestHandler = (req, res) => {
  if (req.method === 'POST' && req.url === '/api/timetable') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      const data = JSON.parse(body);
      const { from, to, date } = data;

      try {
        // Replace with the actual API URL and parameters
        const response = await axios.get('https://opendata.transport.nsw.gov.au/dataset/50ccd787-0d7e-4bcf-9c12-84ca3ab3e897/resource/ad58515a-3593-4d72-952e-a49c859e1db8/download/getschedule-v2_1.0.json', {
          params: { from, to, date }
        });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response.data));
      } catch (error) {
        console.error('Error fetching timetable:', error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error fetching timetable');
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

