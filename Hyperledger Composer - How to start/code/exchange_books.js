/**
 * Script file for the Exchange_Books transaction 
 @param {org.acme.model.Exchange_Books} ec - Instance of book exchange 
 @transaction
 */

function exchange_books(ec) 
{ 
  var book = ec.book_to_exchange; 
  var id_bk = book.book_id; 
  if(ec.old_owner.books_owned.indexOf(id_bk) != -1 && ec.new_owner.books_owned.indexOf(id_bk) == -1) 
  { 
    ec.new_owner.books_owned.push(id_bk); 
    book.owner = ec.new_owner; 
    getParticipantRegistry("org.acme.model.Owner").then(function (participantRegistry) { 
      return participantRegistry.update(ec.new_owner); } 
                                                        ); 
    getParticipantRegistry("org.acme.model.Owner").then(function (participantRegistry) { 
                                                        return participantRegistry.update(ec.old_owner); } 
                                                        ); 
   return getAssetRegistry("org.acme.model.Books").then(function (assetRegistry) { 
     return assetRegistry.update(ec.book_to_exchange); } 
                                                        ); 
  } 
  else 
  { 
    throw Error("Cannot execute transaction. An error has occurred"); 
    return; 
  } 
} 
