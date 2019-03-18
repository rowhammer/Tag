// request('https://www.hydrogenmods.co.uk/hydro_auth/menu_information/menu_version.php', function (error, response, body1) {
  //   if (error) {
  //     Tag.user.setActivity(`Can\'t connect`)
  //   } else {
  //     request('https://www.hydrogenmods.co.uk/hydro_auth/think/get_active_subs.php', function (err, response, body2) {
  //       if (err) {
  //         Tag.user.setActivity('Can\'t connect');
  //       } else {
  //         Tag.user.setActivity(`V: ${body1} | U: ${body2}`)
  //         log(`\tVersion is : ${body1}`);
  //         log(`\tTotal Users are: ${body2}\n`);
  //       }
  //     })
  //   }
  // })
  // request('https://www.hydrogenmods.co.uk/Authentication/HydroStats/GetInjects.php', function (error, response, body) {
  //   if (error) {
  //     log('Site ping failed!')
  //     Tag.user.setActivity('Can\'t connect');
  //   } else {
  //     log(`\tTotal injection amount is: ${body}\n`)
  //   }
  // })
  // var siteMins = 5
  // var siteInterval = siteMins * 60 * 1000;
  // setInterval(function () {
  //   request('https://www.hydrogenmods.co.uk/hydro_auth/menu_information/menu_version.php', function (error, response, body1) {
  //     if (error) {
  //       log('Site ping failed!')
  //       Tag.user.setActivity(`Can\'t connect`)
  //     } else {
  //       request('https://www.hydrogenmods.co.uk/hydro_auth/think/get_active_subs.php', function (err, response, body2) {
  //         if (err) {
  //           log('Site ping failed!')
  //           Tag.user.setActivity('Can\'t connect');
  //         } else {
  //           Tag.user.setActivity(`V: ${body1} | U: ${body2}`)
  //         }
  //       })
  //     }
  //   })
  // }, 600000)
  // log(`\tSite ping running...`);
  // Tag.removeAllListeners('message');