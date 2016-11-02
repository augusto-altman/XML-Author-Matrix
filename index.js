var fs = require("fs");
var xmlPath = process.argv[2];
var xml = fs.readFileSync(xmlPath, "UTF-8");
var parseString = require('xml2js').parseString;

parseString(xml, function (err, result) {
	var articles = result.MedlineCitationSet.Article;
	var authors = {};
	var artcilesByAuthors = {};
	
    articles.forEach(function(article) {
		artcilesByAuthors[article.ArticleTitle[0]] = [];
		article.AuthorList[0].Author.forEach(function(author) {
			var authorKey = author.LastName[0] + " " + author.ForeName[0];
			if(!authors.hasOwnProperty(authorKey)) {
				authors[authorKey] = {
					lastName: author.LastName[0],
					name: author.ForeName[0]
				};
			}
			artcilesByAuthors[article.ArticleTitle[0]].push(authorKey);
		});
	});
	
	var resultantMatrix = initializeMatrix(authors);
	polluteMatrix(resultantMatrix, artcilesByAuthors);
	prettyPrintMatrix(resultantMatrix, authors);
});

function prettyPrintMatrix(matrix, authors) {
	console.log(matrix);
}

function polluteMatrix(matrix, artciles) {
	for(var articleName in artciles) {
		for(var i = 0; i < artciles[articleName].length; i++) {
			var firstAuthorIndexInResultanMatrix = artciles[articleName][i];
			matrix[firstAuthorIndexInResultanMatrix][firstAuthorIndexInResultanMatrix]++;
			for(var j = i+1; j < artciles[articleName].length; j++) {
				var secondAuthorIndexInResultanMatrix = artciles[articleName][j]
				matrix[firstAuthorIndexInResultanMatrix][secondAuthorIndexInResultanMatrix]++;
				matrix[secondAuthorIndexInResultanMatrix][firstAuthorIndexInResultanMatrix]++;
			}
		}
	}
}

function initializeMatrix(authors) {
	var matrix = {};
	
	for(var author in authors) {
		matrix[author] = {};
		for(var co in authors) {
			matrix[author][co] = 0;
		}
	}
	
	return matrix;
}