/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wvvscorim747mlq")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h4cjqtny",
    "name": "homeParagraph",
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
  const collection = dao.findCollectionByNameOrId("wvvscorim747mlq")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h4cjqtny",
    "name": "field",
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
})
