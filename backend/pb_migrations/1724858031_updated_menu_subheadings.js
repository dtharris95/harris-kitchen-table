/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gpfk7i7dz16dukr")

  collection.name = "menu_subheaders"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gpfk7i7dz16dukr")

  collection.name = "menu_subheadings"

  return dao.saveCollection(collection)
})
