/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h1nwloh9rif4niq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tcdhkzp2",
    "name": "subheaders",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "et9kfyu7",
    "name": "paragraphs",
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
    "id": "bxd3yjry",
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
  const collection = dao.findCollectionByNameOrId("h1nwloh9rif4niq")

  // remove
  collection.schema.removeField("tcdhkzp2")

  // remove
  collection.schema.removeField("et9kfyu7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bxd3yjry",
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
