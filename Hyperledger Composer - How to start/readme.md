# Hyperledger Composer - How to start 

In this tutorial we will start by building our first blockchain using Hyperledger Composer. Hyperledger Composer is an application development framework developed by Hyperledger Fabric, a project hosted by the Linux Foundation that aims to build enterprise-level blockchains. 

We will suppose that Hyperledger Composer is installed on a Kubernetes cluster. The main page should be something like that. 


![Node-RED Catalog](https://github.com/GuidoRocco/Blockchain-Tutorials/blob/master/Hyperledger%20Composer%20-%20How%20to%20start/images/Picture_main.png) 

Under My Business Network you will see the blockchains that run on cloud on the Kubernetes cluster, while under the Web browser label you will see all the blockchains that run on your client. 
The principle of Hyperledger Composer is that each user enters the blockchain platform using a card. A card is composed by an id, a password and an address. Cards are issued to the users of the network (usually by the administrator) and they can access the blockchain platform by using that card. We will see in the next tutorials how the admin can manage and issue cards to new users in a very simple and intuitive way directly via the Composer. 

Let us start by analizing the main components of a Hyperledger project. 

A Hyperledger Composer project is composed by the following files: 

- A model file (.cto) 

The model file is used to define the members of our network, the asset exchanged and the transactions between the members. It's written in a JSON-like formatting. 

- One or more script files (.js) 

Script files manage transactions between the members of the network. Each transaction is defined by a script file. Script files are written in JavaScript. 

- A permission file (.acl) 

The permission file manages the permissions of the blockchain. It sets what rights different users have on the blockchain (edi/t/delete code, modify the registry asset, etc.). It's also written in a JSON-like formatting. 

- A query file (.qry) 

The query file defines the queries of the network. Queries are interrogations that can be made to the world state of the blockchain via the Hyperledger REST-Server (or any API that exposes the services of the blockchain). The query file is optional: in this tutorial, we won't use it, so you can forget it for now. 

In this first tutorial, we will create a network in our browser and enter it as the administrator. Normally, the administrator is the entity that has the full control of the blockchain: it can modify the chaincode, add or remove members and issue transactions. He manages the permissions of the blockchain by editing the permission file (the .acl file in the code folder). He modifies the chaincode when necessary and adds new scripts if necessary. 

We start by clicking on the "Deploy a new business network" button under the "Connection: Web Browser" label. We should land in a page like that: 


![Node-RED Catalog](https://github.com/GuidoRocco/Blockchain-Tutorials/blob/master/Hyperledger%20Composer%20-%20How%20to%20start/images/Picture_1.png) 


We should get two files: a readme file and a permission file. The readme can be used to explain the network to new users. It's an .md file that can be edited. The permission file manages the permissions of the blockchain: we will explain later how to deal with this file. 


Let us first of all create the model file. Click on "Add a file" in the bottom left part of the screen. You will be prompted for a choice. Choose the option "model file (.cto)". You should get something like this: 


![Node-RED Catalog](https://github.com/GuidoRocco/Blockchain-Tutorials/blob/master/Hyperledger%20Composer%20-%20How%20to%20start/images/Picture_2.png) 

Now copy the content of the model file into the console. 


![Node-RED Catalog](https://github.com/GuidoRocco/Blockchain-Tutorials/blob/master/Hyperledger%20Composer%20-%20How%20to%20start/images/Picture_4.png) 



