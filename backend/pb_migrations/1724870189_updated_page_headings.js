/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cumldv6k8b6zjd0")

  collection.listRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cumldv6k8b6zjd0")

  collection.listRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
