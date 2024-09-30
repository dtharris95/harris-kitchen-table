/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ofhspx8qr4l9ib8")

  collection.name = "menu_softDrinks"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ofhspx8qr4l9ib8")

  collection.name = "drinks"

  return dao.saveCollection(collection)
})
