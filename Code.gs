function doGet() {
  var html = HtmlService.createHtmlOutputFromFile('index');
  html.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  
  return html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function uploadData(name, 
              occupation,
              postcodeDistrict, 
              keyWorkCovidExperience,
              freeBroadband,
              nationaliseSausages,
              careWorkersFairPay,
              communityEnergy,
              otherChecked,
              otherText) {  
  var spreadsheet = SpreadsheetApp.openById(dataSpreadsheetId);
  var sheet = spreadsheet.getActiveSheet();
  
  sheet.appendRow([name,
              occupation,
              postcodeDistrict,
              keyWorkCovidExperience,
              freeBroadband,
              nationaliseSausages,
              careWorkersFairPay,
              communityEnergy,
              otherChecked,
              otherText]);
}

function loadCoverImageBytes() {
  return loadImageBytes(backgroundImageId);
}

function loadBadgeImageBytes() {
  return loadImageBytes(badgeImageId);
}

function loadImageBytes(id) {
  var bytes = DriveApp.getFileById(id).getBlob().getBytes();
  return Utilities.base64Encode(bytes);
}