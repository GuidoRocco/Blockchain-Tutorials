
# Hyperledger Composer - How to start 

In this tutorial we will start by building our first blockchain using Hyperledger Composer. Hyperledger Composer is an application development framework developed by Hyperledger Fabric, a project hosted by the Linux Foundation that aims to build enterprise-level blockchains. 

We will suppose that Hyperledger Composer is installed on a Kubernetes cluster. The main page should look something like that. 


![Node-RED Catalog](https://github.com/GuidoRocco/Blockchain-Tutorials/blob/master/Hyperledger%20Composer%20-%20How%20to%20start/images/Picture_main.png) 

Under My Business Network you will see the blockchains that run on cloud on the Kubernetes cluster, while under the Web browser label you will see all the blockchains that run on your client. You can deploy a new business network by using the existing Business Network Card or you can import an already existing card by clicking on the buttons in the upper right corner of the screen. 

The principle of Hyperledger Composer is that each user enters the blockchain platform using a card. A card is composed by an id, a password and an address. Cards are issued to the users of the network (usually by the administrator) and they can access the blockchain platform by using that card. We will see in the next tutorials how the admin can manage and issue cards to new users in a very simple and intuitive way directly via the Composer. 

Let us start by analizing the main components of a Hyperledger project. 

A Hyperledger Composer project is composed by the following files: 

- A model file (.cto) 

The model file is used to define the members of our network, the assets exchanged and the transactions between the members. It's written in a JSON-like formatting. 

- One or more script files (.js) 

Script files manage transactions between the members of the network. Each transaction is defined by a script file. Script files are written in JavaScript. 

- A permission file (.acl) 

The permission file manages the permissions of the blockchain. It sets what rights different users have on the blockchain (edi/t/delete code, modify the registry assets, etc.). It's also written in a JSON-like formatting. 

- A query file (.qry) 

The query file defines the queries of the network. Queries are interrogations that can be made to the world state of the blockchain via the Hyperledger REST-Server (or any API that exposes the services of the blockchain). The query file is optional: in this tutorial, we won't use it, so you can forget it for now. 

In this first tutorial, we will create a network in our browser and enter it as the administrator. Usually, the administrator is the entity that has the full control of the blockchain: it can modify the chaincode, add or remove members and issue transactions. He manages the permissions of the blockchain by editing the permission file (the .acl file in the code folder). He modifies the chaincode when necessary and adds new scripts if necessary. 

We start by clicking on the "Deploy a new business network" button under the "Connection: Web Browser" label. We should land in a page like this: 


![Node-RED Catalog](https://github.com/GuidoRocco/Blockchain-Tutorials/blob/master/Hyperledger%20Composer%20-%20How%20to%20start/images/Picture_1.png) 


We should get two files: a readme file and a permission file. The readme can be used to explain the network to new users. It's an .md file that can be edited. The permission file manages the permissions of the blockchain: we will explain later how to deal with this file. 


Let us first of all create the model file. Click on "Add a file" in the bottom left part of the screen. You will be prompted for a choice. Choose the option "model file (.cto)". You should get something like this: 


![Node-RED Catalog](https://github.com/GuidoRocco/Blockchain-Tutorials/blob/master/Hyperledger%20Composer%20-%20How%20to%20start/images/Picture_2.png) 

Now copy the content of the model file into the console. 


![Node-RED Catalog](https://github.com/GuidoRocco/Blockchain-Tutorials/blob/master/Hyperledger%20Composer%20-%20How%20to%20start/images/Picture_4.png) 


The model file is composed by sets of JSON-like parts. The syntax for defining an asset and a participant is the same: we must use the keywords "identified by" to provide a primary key in order to find the element in the world state. The syntax is respectively 

> asset <name_asset> identified by <name_asset_identifier> 

> participant <name_participant> identified by <name_participant_identifier> 

In the brackets we can define variables and references. A variable is defined by the "o" sign, while references are defined by the "-->" sign. In our example, we decided to identify each book by a book id, which is anything that can univocally identify a book in our network. 

Transactions in the model file are identified only by their name, so we don't put an identifier in order to specify them. We defined the transaction Exchange_Books providing three references, since we will change the ownership of the books and we want the world state to change accordingly. 
We click then on "Update" in order to update the code in our platform. 

Now we have to create a script file in order to manage the transaction. Script files are written in JavaScript, so we recommend a thorough study of the language before starting to use Hyperledger Composer. 
We create a script file named "exchange_books.js". We then copy the content of the exchange_books file in the code folder of this GitHub repo's tutorial. 
At this point, we should have something like this: 

![Node-RED Catalog](https://github.com/GuidoRocco/Blockchain-Tutorials/blob/master/Hyperledger%20Composer%20-%20How%20to%20start/images/Picture_5.png) 

The script file is just a JavaScript file used to describe our network's transaction. One difference that we point out are the first three lines of the script file: 

> Script file for the Exchange_Books transaction 
 
 > @param {org.acme.model.Exchange_Books} ec - Instance of book exchange 
 
 > @transaction 
 
 The @param and the @transaction part are compulsory: the @param sets the transaction that is handled by the script file, while ec is the instance of the transaction that is called in the script file. The @transaction tag let Composer know that we are handling a transaction. 
 
 Finally, we add the permissions file in the same way. We should get something like this: 
 
 
 ![Node-RED Catalog](https://github.com/GuidoRocco/Blockchain-Tutorials/blob/master/Hyperledger%20Composer%20-%20How%20to%20start/images/Picture_6.png) 
 
 
 The permission file describes the permissions for our network in a JSON-like formatting. Let us analyze in further detail the syntax. The file is composed by rules: each rules define some actions that a user can or cannot do. Possible actions are the following: 
 
 - READ 
 
 Specifies if the user can read the chaincode and/or the world state. 
 
 - CREATE 
 
 Specifies if the user can create new files (chaincode). 
 
 - UPDATE 
 
 Specifies if the user can update the chaincode and/or the world state. 
 

 - DELETE 
 
 Specifies if the user can delete parts of the chaincode and/or the world state. 
 
 
 
 
 The parts of our rule are the following: 
 
 - DESCRIPTION 
 
 It is a brief description of the permission, made in order to better undestand it. It can be any string. 
 
 - PARTICIPANT 
 
 This field specifies the participant in the world state. The default participant registry in Hyperledger Composer is "org.acme.model.<Participant>", where <Participant> is the name we have given to the participants of our network. 
  
  - OPERATION 
  
  This field specifies the operation that is handled by the rule. The operation is chosen from the actions defined above (create, read, update, delete). 
  
  - RESOURCE 
  
  This is the asset registry of the resource that is handled by the rule. 
  
  - ACTION 
  
  It can be allow (we allow the participant to pursue the operation on the resource) or deny (we deny the participant to pursue the operation on the resource). 
  


We are now ready to test our network. Go to the "Test" section by clicking the button on the upper left corner of the screen. You will get something like this: 


 ![Node-RED Catalog](https://github.com/GuidoRocco/Blockchain-Tutorials/blob/master/Hyperledger%20Composer%20-%20How%20to%20start/images/Picture_7.png) 
 
 
 We can then create new participants and assets, that will be added in the world state (respectively, in the participant registry and in the asset registry). If we click on "Submit Transaction", we can test the transactions defined by our chaincode. 
 
 
  ![Node-RED Catalog](https://github.com/GuidoRocco/Blockchain-Tutorials/blob/master/Hyperledger%20Composer%20-%20How%20to%20start/images/Picture_8.png) 
  

You're now ready to do your own experimentations with Hyperledger Composer. Congratulations! 



