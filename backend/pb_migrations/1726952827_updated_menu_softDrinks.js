/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ofhspx8qr4l9ib8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rrroguuv",
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
  const collection = dao.findCollectionByNameOrId("ofhspx8qr4l9ib8")

  // remove
  collection.schema.removeField("rrroguuv")

  return dao.saveCollection(collection)
})
