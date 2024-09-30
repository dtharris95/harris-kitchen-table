/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hxumem6a8qttqog")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a25nuukt",
    "name": "subHeading",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hxumem6a8qttqog")

  // remove
  collection.schema.removeField("a25nuukt")

  return dao.saveCollection(collection)
})
