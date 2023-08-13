function importCSVtoGoogleSheets() {
  var spreadsheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID");
  var sheet = spreadsheet.getSheetByName("YOUR_SHEET_NAME");

  var csvUrl = "YOUR_CSV_FILE_LINK"
  var csvContent = UrlFetchApp.fetch(csvUrl).getContentText();
  var csvData = Utilities.parseCsv(csvContent);

  var headers = csvData[0];
  var values = csvData.slice(1);

  sheet.clearContents();

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(2, 1, values.length, values[0].length).setValues(values);
}
