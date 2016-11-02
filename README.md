# XML-Author-Matrix

## Question "a"
To run the test: (you will need nodejs)
* Download this repository
* From a command line located on this project root path run: ***npm install***
* From a command line located on this project root path run: ***node index.js sample.xml***
  
**Note 1**: This solution will support multiple co-authors per article (more than just two as specified in the example given in the pdf).

**Note 2**: This solution is not defensive. The are no checks regarding data/input format. This was an implementation decision in order to get a solution faster considering the time constrains.


## Question "b"
A minimal test suite should test:
*


## Question "c"
* You haven't an unique ID per article. Therefore you consider two different articles to be the same by mistake. This problem will be more seriuos as more records are added.
* You haven't an unique ID per author. Therefore you consider two different authors to be the same by mistake. This problem will be more seriuos as more records are added.
* Since this is a single XML file containing all your data, as you records amount increase loading it on memory to process it will be more and more expensive (you will need more and more system memory). You should at least think an index schema where the records are separated in different files and organized on indices.
* Since the storage system is just a simple XML and this clearly is a relational problem you must but cannot ensure the SOLID principles.
* You have to manipulate the XML directly and manually. Therefore you will have to implement several performance improvements like caching systems, fast parsing, etc, if you want to scale.
* Since you have a single XML file you cannot design a clusterized storage solution.
* As you records increase it will be more and more expensive to create backups because you have just one single XML file that doesn't track changes/diffs.
