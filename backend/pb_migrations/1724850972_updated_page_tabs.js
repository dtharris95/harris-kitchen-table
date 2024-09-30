/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xvdwit495791rl0")

  collection.name = "website_tabs"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xvdwit495791rl0")

  collection.name = "page_tabs"

  return dao.saveCollection(collection)
})
