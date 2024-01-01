function romanticHut(e) {

  var timestamp = 1;
  var date = 2;
  var room = 3;
  var number = 4;   // Regex for # validation: ^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$
  var message = 'Romantic Hut Party Hall';

  // Variables to check if proposed date is possible
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Avail");
  var last = ss.getRange("A1:A").getValues().filter(String).length;
  var today = Utilities.formatDate(new Date(), "GMT-4", 'MMM d, yyyy');
  var date = ss.getRange(last, date).getValue();
  var newDate = Utilities.formatDate(date, "GMT-4", 'MMM d, yyyy');
  var phone = ss.getRange(last, number).getValue();
  var number = parseInt(String(phone).replace(/\D/g,''));

  if (limiter() > 10) {
    email(number);
    return;
  }
  // Create variables of proposed details
  if (new Date(newDate) >= new Date(today)) {
    var day = Utilities.formatDate(date, "GMT-4", 'EEE, ');
    var rooms = ss.getRange(last, room).getValue().split(', ');
    for (i in rooms) {
      rooms[i] = rooms[i].split(' ')[0];
    }
    message += '\nDate: '+day+newDate+avail(rooms, newDate);
  } else {
    message += '\nError: Date has passed';
  }
  try {
    response_data = sendSms('1'+number, message);
    if (limiter() === 10) {
      response_data = sendSms('1'+number, 'You have reached your daily limit with this bot');
    }
  } catch(err) {
    Logger.log(err);
  }
}

function limiter() {  // Same date from timestamp and phone number. Email if if it happens
  var count = 0;
  var startRow = 2;
  var numRows = 0;
  var timestamp = 1;
  var date = 2;
  var room = 3;
  var number = 4;
  var today = Utilities.formatDate(new Date(), "GMT-4", 'MMM d, yyyy');

  var avail = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Avail");
  var last = avail.getRange("A1:A").getValues().filter(String).length;
  var phone = avail.getRange(last, number).getValue();
  var number = parseInt(String(phone).replace(/\D/g,''));

  numRows = avail.getRange("A1:A").getValues().filter(String).length;
  var availRange = avail.getRange(startRow, 1, numRows, 4); 
  var availData = availRange.getValues();

  // Count timestamp and number pairs of avail form
  for (i in availData) {
    var row = availData[i];
    var curDate = Utilities.formatDate(new Date(row[0]), "GMT-4", 'MMM d, yyyy');
    var curNumber = parseInt(String(row[3]).replace(/\D/g,''));
    if (today === curDate && number === curNumber) {
      count += 1;
    } 
  }
  return count;
}

function avail(rooms, date) {

  var res = '';
  var status = 'OPEN';

  // Create list of reserved dates
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Public");
  var startRow = 3;
  var numRows = ss.getRange("A1:A").getValues().filter(String).length;
  var dataRange = ss.getRange(startRow, 1, numRows-2, 2);
  var data = dataRange.getValues();

  // If date and room pair matches, FULL. If proposed date passed, OPEN
  for (i in rooms) {
    for (j in data) {
      var row = data[j];
      var curDate = Utilities.formatDate(row[0], "GMT-4", 'MMM d, yyyy');
      var curRoom = row[1];
      if (date === curDate && rooms[i] == curRoom) {
        status = 'FULL';
        break;
      } 
    }
    res += '\nRoom: '+rooms[i]+'\tStatus: '+status;
  }
  return res;
}

function sendSms(to, body) {
  var messages_url = "https://api.twilio.com/2010-04-01/Accounts/SID/Messages.json";

  var payload = {
    "To": to,
    "Body" : body,
    "From" : "TWILIO"
  };

  var options = {
    "method" : "post",
    "payload" : payload
  };

  options.headers = { 
    "Authorization" : "Basic " + Utilities.base64Encode("SID:AUTH")
  };

  UrlFetchApp.fetch(messages_url, options);
}

function email(message) {
  MailApp.sendEmail('EMAIL@gmail.com', 'Romantic Hut Party Hall', message+' has attempted 10 requests');
}
