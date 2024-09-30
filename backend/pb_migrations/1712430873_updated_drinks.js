/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ew8k0kl22elllk4")

  // remove
  collection.schema.removeField("ahr5injj")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ew8k0kl22elllk4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ahr5injj",
    "name": "drink2",
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
