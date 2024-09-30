/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tlrg5l1ur2n6zko")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "viiog0rw",
    "name": "price",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tlrg5l1ur2n6zko")

  // remove
  collection.schema.removeField("viiog0rw")

  return dao.saveCollection(collection)
})
