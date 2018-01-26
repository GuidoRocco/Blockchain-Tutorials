/**
 * Script file for the Take_from_Library transaction 
 @param {org.acme.model.Take_from_Library} tl - Instance of exchange between user and library
 @transaction
 */ 

function take_from_library(tl) 
{ 
  var book_id = tl.book_id; 
  var index = tl.library.books_owned.indexOf(book_id); 
  if(tl.library.books_owned.indexOf(book_id) != -1 && tl.owner.books_owned.indexOf(book_id) == -1) 
  {
    tl.library.books_owned.splice(index, 1); 
    tl.owner.books_owned.push(book_id); 
    tl.book.owner = tl.owner; 
    getAssetRegistry("org.acme.model.Book").then(function (assetRegistry) { 
      return assetRegistry.update(tl.book); } 
                                                  ); 
    getParticipantRegistry("org.acme.model.Owner").then(function (participantRegistry) { 
      return participantRegistry.update(tl.owner); } 
                                                        ); 
    return getParticipantRegistry("org.acme.model.Library").then(function (participantRegistry) { 
      return participantRegistry.update(tl.library); } 
                                                                 ); 
  } 
  else 
  {
    throw Error("Error. The transaction won't be executed"); 
    return; 
  } 


} 


