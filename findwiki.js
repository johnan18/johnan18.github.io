$(document).ready(function () {
function showResult(contentHtml) {
$('#content').html(contentHtml);
}
function startSearch(inputText) {
$.ajax({

url: 'https://en.wikipedia.org/w/api.php?format=json&action=parse&redirects&prop=text&mobileformat=html&page=' + inputText + '&section=0',

dataType: 'jsonp'
}).done(function (data) {
console.log(data);
if (data.error) {
switch (data.error.code) {
case 'missingtitle':
$.ajax({
url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srnamespace=0&srlimit=10&srsearch=' + inputText,
dataType: 'jsonp'
}).done(function (data) {
console.log(data);
if (data.error) {
}
else {
var $ul = $('<ol></ol>');
for (var i = 0; i < data.query.search.length; i++) {
var item = data.query.search[i];
var $li = $('<li></li>');
$li.append('<h3><a href="#" class="snippet-item">' + item.title +  '</a></h3>');
$li.append(item.snippet);
$ul.append($li);
}
showResult($ul);


}

});
break;
}
}
else {
showResult(data.parse.text['*']);
}
});
}

var searchWikipedia = function(currentTerm){
var url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
$.ajax({
url: url + currentTerm,
type: 'GET',
dataType: 'jsonp',
error: function(data){
console.log("We got problems");
console.log(data.status);
},
success: function(data){
console.log("WooHoo!");

console.log(data);

$("#searchTerm").html(data[0]);

var searchResults = data[1];


for (var i = 0; i < searchResults.length; i++){

var resultTerms = searchResults[i].replace(/\s/g, '_');
var curURL = 'http://en.wikipedia.org/wiki/' + item;

$("#resultsTarget").append(
"<p class='wikiResults'>" +
"<a href=" + curURL + ">" +
searchResults[i] +
"</a>" +
"</p>"
);
}
}
});
};
$('#search-button').on('click', function () {
var inputText = $.trim($('#query').val());
startSearch(inputText);
});
$(document).on('click', '.snippet-item', function (event) {

var text = $(this).text();
startSearch(text);
});
});
