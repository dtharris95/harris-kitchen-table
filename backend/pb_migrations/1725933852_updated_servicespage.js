/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6q1tw6q3hq95u6i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r9laqgmo",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8xy1cus9",
    "name": "subHeadings",
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
  const collection = dao.findCollectionByNameOrId("6q1tw6q3hq95u6i")

  // remove
  collection.schema.removeField("r9laqgmo")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8xy1cus9",
    "name": "headings",
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
