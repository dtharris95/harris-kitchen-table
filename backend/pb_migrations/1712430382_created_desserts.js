/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2vsowfbdtdqp120",
    "created": "2024-04-06 19:06:22.794Z",
    "updated": "2024-04-06 19:06:22.794Z",
    "name": "desserts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pixt4r3v",
        "name": "dessert1",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "wnplfj3h",
        "name": "dessert2",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2vsowfbdtdqp120");

  return dao.deleteCollection(collection);
})
