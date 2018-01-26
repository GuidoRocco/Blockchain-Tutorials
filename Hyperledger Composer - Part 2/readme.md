
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


