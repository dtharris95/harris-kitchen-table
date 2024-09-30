/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gpfk7i7dz16dukr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5pohojmo",
    "name": "mainHeading",
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

  // remove
  collection.schema.removeField("5pohojmo")

  return dao.saveCollection(collection)
})
