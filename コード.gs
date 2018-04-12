function onFormSubmit(e) {
  Logger.log("onFormSubmit");
  Logger.log(e);
//  Logger.log(event.range.getRow());

  postTypetalk("myFunction"+JSON.stringify(e));
}

function onEdit(e){
  // Set a comment on the edited cell to indicate when it was changed.
//  var range = e.range;
//  range.setNote('Last modified: ' + new Date());
  Logger.log("onEdit");
  Logger.log(e);
//  Logger.log(e.range.getRow());
   
  postTypetalk("onEdit"+JSON.stringify(e));
}

function postTypetalk(message) {
  var jsonData =
  {
    "typetalkToken" : typetalkToken,
    "message" : message
  };
  var payload = JSON.stringify(jsonData);

  var options =
  {
    "method" : "post",
    "contentType" : "application/json",
    "payload" : payload
  };

  UrlFetchApp.fetch(postUrl, options);
}

