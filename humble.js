const request = require('request');
const fs = require('fs');

fs.createReadStream('host.json').pipe(request.put('https://humblebundlenotifications.azurewebsites.net/api/RegisterWebhook'));