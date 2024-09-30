/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tlrg5l1ur2n6zko")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jsrpb9c5",
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
  const collection = dao.findCollectionByNameOrId("tlrg5l1ur2n6zko")

  // remove
  collection.schema.removeField("jsrpb9c5")

  return dao.saveCollection(collection)
})
