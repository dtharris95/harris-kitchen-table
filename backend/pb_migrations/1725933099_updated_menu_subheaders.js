/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gpfk7i7dz16dukr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gptpj0eg",
    "name": "headingName",
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
  const collection = dao.findCollectionByNameOrId("gpfk7i7dz16dukr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gptpj0eg",
    "name": "appHeadingName",
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
