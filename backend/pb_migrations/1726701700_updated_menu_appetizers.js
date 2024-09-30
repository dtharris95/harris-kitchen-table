/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tlrg5l1ur2n6zko")

  collection.name = "menu_appetizer"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tlrg5l1ur2n6zko")

  collection.name = "menu_appetizers"

  return dao.saveCollection(collection)
})
