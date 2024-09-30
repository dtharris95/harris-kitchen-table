/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lf88o714mjnep7e",
    "created": "2024-04-06 19:16:08.388Z",
    "updated": "2024-04-06 19:16:08.388Z",
    "name": "desserts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rdy4z9ln",
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
  const collection = dao.findCollectionByNameOrId("lf88o714mjnep7e");

  return dao.deleteCollection(collection);
})
