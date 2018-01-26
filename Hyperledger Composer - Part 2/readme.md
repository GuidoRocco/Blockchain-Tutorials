
# Hyperledger Composer - Part 2 Tutorial 

> Warning. I'm working on this repo. It can have errors and/or be incomplete. Proceed at your own risk. 

In this second tutorial on Hyperledger Composer, we will enrich the network and the transaction of the previous "Hyperledger Composer - How to start" tutorial. At this moment, the reader should have a basic understanding of how Composer works, how to define the assets, the participants and the transactions of our network. 

As we remember, the Used Books Network is a network of people that exchange used books. In this second tutorial, we will enrich our model by adding libraries. Libraries have their own list of used books stored in an array, in a similar way as in the case of the used books owners. 
You can file the new model file in the code folder of this tutorial. We added a new participant, i.e. libraries, and two new transactions: give_to_library, which models the transaction of a person that gives his used book to the library, and take_from_library, which models the converse. 
The Library participant is given by the following attributes: 

- Library_id 

This is an id which identifies univocally the library. It can be anything that is good for this purpose. 

- Library_name 

This is the name of our library. 

- Library_address 

This is the address of our library. 

- Books_owned 

This is an array which contains the IDs of the used books that the library has. The script file deny the library to have two books with the same ID: this is consistent to the fact that we want the library ID to univocally identify the library in our network. 

Copy the new model file and print it into the console. In order to learn faster and to better understand the logic of the code, I recommend you to manually digiting the code into the console. 
You should get something like this: 


![Node-RED Catalog](https://github.com/GuidoRocco/Blockchain-Tutorials/blob/master/Hyperledger%20Composer%20-%20Part%202/images/Picture_1.png) 


Now let us examine the two new transactions of the network. 

The give_to_library file models the transaction of an user that gives his used book to a library. The script file does the following: 

1. It delete the book from the array books_owned of the owner 

2. It adds the same book to the books_owned array of the library 

3. It changes the ownership of the book from the owner's ID to a fictitional ID (we put 2000), which is the ID that represents a generic library. 

Moreover, both the asset registry and the participant registries for the participants and the libraries are updated. 


![Node-RED Catalog](https://github.com/GuidoRocco/Blockchain-Tutorials/blob/master/Hyperledger%20Composer%20-%20Part%202/images/Picture_2.png) 


The take_from_library script file works in a similar fashion. It does the following: 

1. It delete the book from the array books_owned of the library 

2. It adds the same book to the books_owned array of the library 

3. It changes the ownership of the book from the fictional ID that represents all the libraries of the network to the ID of the new owner. 


![Node-RED Catalog](https://github.com/GuidoRocco/Blockchain-Tutorials/blob/master/Hyperledger%20Composer%20-%20Part%202/images/Picture_3.png) 


Another file we added to the code is the **query file**. The query file is a file that represents all the possible queries to our network. Queries must be done via API calls: Hyperledger Composer provides a framework called *Hyperledger REST Server* that can handle remote calls. If you deployed Composer as a Kubernetes cluster on IBM Cloud following the first tutorial of our series, than you should have the Composer REST Server at the same public IP of Hyperledger Composer, but on the port 31090 instead of 31080. 
Let us analyze what the query file is composed of. 



![Node-RED Catalog](https://github.com/GuidoRocco/Blockchain-Tutorials/blob/master/Hyperledger%20Composer%20-%20Part%202/images/Picture_4.png) 

