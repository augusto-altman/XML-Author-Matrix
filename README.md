# XML-Author-Matrix

## Question "a"
To run the test: (you will need nodejs)
* Download this repository
* From a command line located on this project root path run: ***npm install***
* From a command line located on this project root path run: ***node index.js sample.xml***
  
**Note 1**: This solution will support multiple co-authors per article (more than just two as specified in the example given in the pdf).

**Note 2**: This solution is not defensive. The are no checks regarding data/input format. This was an implementation decision in order to get a solution faster considering the time constrains.


## Question "b"
First of all I would collect the most accurate problem definition I could. To design a proper test suite I should have at least all the valid input patterns and the the expected outputs. I would need to understand waht is the purpose of the code I'm testing in order to understand which is its value and what is the core behaviours that it should demonstrate.

A minimal test suite should include tests for:
* Running it with a non-XML file.
* Running it with an XML file with no records.
* Running it with an XML containing some valid records - Basic functionallity.
* Running it with an XML containing only invalid records - Negative case.
* Running it with an XML containing some invalid records. The definitions I would collect shluld specify what to do with the invalid records.

Of course I would automate my tests and run them on some continous testing pipeline everytime a commit is done in order to ensure regression testing to be runned on every single change. I'm a big fan of BDD so I would write my test using behave and run it with [cucumber](https://cucumber.io/).


## Question "c"
* You haven't an unique ID per article. Therefore you consider two different articles to be the same by mistake. This problem will be more seriuos as more records are added.
* You haven't an unique ID per author. Therefore you consider two different authors to be the same by mistake. This problem will be more seriuos as more records are added.
* Since this is a single XML file containing all your data, as you records amount increase loading it on memory to process it will be more and more expensive (you will need more and more system memory). You should at least think an index schema where the records are separated in different files and organized on indices.
* Since the storage system is just a simple XML and this clearly is a relational problem you must but cannot ensure the SOLID principles.
* You have to manipulate the XML directly and manually. Therefore you will have to implement several performance improvements like caching systems, fast parsing, etc, if you want to scale.
* Since you have a single XML file you cannot design a clusterized storage solution.
* As you records increase it will be more and more expensive to create backups because you have just one single XML file that doesn't track changes/diffs.
