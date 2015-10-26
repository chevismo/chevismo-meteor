Meteor.methods({
  readMethod( argument ) {
    check( argument, String );

    var document = Collection.findOne( argument );

    if ( !document ) {
      throw new Meteor.Error( 'document-not-found', 'No se han encontrado documentos que coincidan con la consulta.' );
    }

    return document;
  }
});
