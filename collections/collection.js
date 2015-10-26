Collection = new Meteor.Collection( 'collection' );

Collection.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Collection.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let CollectionSchema = new SimpleSchema({
  "owner": {
    type: String,
    label: "El identificador del propietario de este documento."
  }
});

Collection.attachSchema( CollectionSchema );
