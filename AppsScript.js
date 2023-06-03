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

function avail(e) {

  // Ensure it's the correct form being requested
  if (e.source.getActiveSheet().getName() != 'Avail') {
    return;
  }
  var timestamp = 1;
  var name = 2;
  var date = 3;
  var room = 4;
  var number = 5;
  var message = 'Romantic Hut Party Hall';

  // Variables to check if proposed date is possible
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Avail");
  var last = ss.getRange("A1:A").getValues().filter(String).length;
  var today = Utilities.formatDate(new Date(), "GMT+19", 'MMMM d, yyyy');
  var date = ss.getRange(last, date).getValue();
  var newDate = Utilities.formatDate(date, "GMT+19", 'MMMM d, yyyy');
  var number = ss.getRange(last, number).getValue();

  if (limiter() > 10) {
    email(number);
    return;
  }
  
  // Create variables of proposed details
  if (new Date(newDate) >= new Date(today)) {
    var name = ss.getRange(last, name).getValue();
    var room = ss.getRange(last, room).getValue();
    var day = Utilities.formatDate(date, "GMT+19", 'EEEE');
    var status = '';

  // Create list of reserved dates
    var public = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Public");
    var startRow = 3;
    var numRows = public.getRange("A1:A").getValues().filter(String).length;
    var dataRange = public.getRange(startRow, 1, numRows, 2);
    var data = dataRange.getValues();

  // If date and room pair matches, FULL. If proposed date passed, OPEN
    for (i in data) {
      var row = data[i];
      var curDate = Utilities.formatDate(row[0], "GMT+19", 'MMMM d, yyyy');
      var curRoom = row[1];
      if (newDate === curDate && room == curRoom) {
        status = 'FULL';
        break;
      } 
      if (new Date(newDate) < new Date(curDate)) {
        status = 'OPEN';
        break;
      }
    }
    message += '\nName: '+name+'\nDay: '+day+'\nDate: '+newDate+'\nRoom: '+room+'\nStatus: '+status;
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
  var name = 2;
  var date = 3;
  var time = 4;
  var number = 5;
  var today = Utilities.formatDate(new Date(), "GMT+19", 'MMMM d, yyyy');

  var avail = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Avail");
  var last = avail.getRange("A1:A").getValues().filter(String).length;
  var number = avail.getRange(last, number).getValue();

  numRows = avail.getRange("A1:A").getValues().filter(String).length;
  var availRange = avail.getRange(startRow, 1, numRows, 5); 
  var availData = availRange.getValues();

  // Count date and number pairs of avail form
  for (i in availData) {
    var row = availData[i];
    var curDate = Utilities.formatDate(new Date(row[0]), "GMT+19", 'MMMM d, yyyy');
    var curNumber = row[4];
    if (today === curDate && number === curNumber) {
      count += 1;
    } 
  }
  return count;
}

function email(message) {
  MailApp.sendEmail('email@gmail.com', 'Romantic Hut Party Hall', message+' has attempted 10 requests');
}
