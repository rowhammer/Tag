
  request('https://www.hydrogenmods.co.uk/Authentication/Detection/CheckVersion.php?Type=2', function (error, response, body1) {
    if (error) {
      Tag.user.setActivity(`Can\'t connect`)
    } else {
      request('https://www.hydrogenmods.co.uk/Authentication/Discord/GetMonthly.php', function (err, response, body2) {
        if (err) {
          Tag.user.setActivity('Can\'t connect');
        } else {
          var monthly = body2[0] + body2[1] + body2[2];
          var lifetime = body2[4] + body2[5] + body2[6];
          var givers = body2[8] + body2[9] + body2[10];
          var total = parseInt(monthly) + parseInt(lifetime) + parseInt(givers);
          Tag.user.setActivity(`V: ${body1} | U: ${total}`)
          console.log(`\tVersion is : ${body1}`);
          console.log(`\tTotal Users are: ${total}`);
        }
      })
    }
  })
  request('https://www.hydrogenmods.co.uk/Authentication/HydroStats/GetInjects.php', function (error, response, body) {
    if (error) {
      Tag.user.setActivity('Can\'t connect');
    } else {
      console.log(`\tTotal injection amount is: ${body}\n`)
      console.log('\tData loaded, logs follow...\n')
    }
  })
  var mins = 5
  var interval = mins * 60 * 1000;
  setInterval(function () {
    request('https://www.hydrogenmods.co.uk/Authentication/Detection/CheckVersion.php?Type=2', function (error, response, body1) {
      if (error) {
        Tag.user.setActivity(`Can\'t connect`)
      } else {
      request('https://www.hydrogenmods.co.uk/Authentication/Discord/GetMonthly.php', function (err, response, body2) {
        if (err) {
          Tag.user.setActivity('Can\'t connect');
        } else {
          var monthly = body2[0] + body2[1] + body2[2];
          var lifetime = body2[4] + body2[5] + body2[6];
          var givers = body2[8] + body2[9] + body2[10];
          var total = parseInt(monthly) + parseInt(lifetime) + parseInt(givers);
          Tag.user.setActivity(`V: ${body1} | U: ${total}`)
        }
      })
    }})
  }, 300000)
  console.log(`\tSuccessful activation of ${Tag.user.username}. Loading data...`);