/**
 * Script file for the Give_to_Library transaction 
 @param {org.acme.model.Give_to_Library} gl - Instance of exchange between user and library
 @transaction
 */ 

function give_to_library(gl) 
{
  var book_id = gl.book_id; 
  var index = gl.owner.books_owned.indexOf(book_id); 
  if(gl.owner.books_owned.indexOf(book_id) != -1 && gl.library.books_owned.indexOf(book_id) == -1) 
  {
    gl.owner.books_owned.splice(index, 1); 
    gl.library.books_owned.push(book_id); 
    gl.book.owner = gl.new_owner; 
    getAssetRegistry("org.acme.model.Book").then(function (assetRegistry) { 
      return assetRegistry.update(gl.book); } 
                                                  ); 
    getParticipantRegistry("org.acme.model.Owner").then(function (participantRegistry) { 
      return participantRegistry.update(gl.owner); } 
                                                        ); 
    return getParticipantRegistry("org.acme.model.Library").then(function (participantRegistry) { 
      return participantRegistry.update(gl.library); } 
                                                                 ); 
  } 
  else 
  { 
    throw Error("Error. The transaction won't be executed"); 
    return; 
  } 
} 

    
