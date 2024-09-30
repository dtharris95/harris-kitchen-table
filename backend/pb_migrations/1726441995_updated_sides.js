/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nmv8v7q6mq3h38s")

  collection.name = "menu_sides"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nmv8v7q6mq3h38s")

  collection.name = "sides"

  return dao.saveCollection(collection)
})
