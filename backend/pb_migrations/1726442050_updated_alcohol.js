/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hxumem6a8qttqog")

  collection.name = "menu_alcohol"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hxumem6a8qttqog")

  collection.name = "alcohol"

  return dao.saveCollection(collection)
})
