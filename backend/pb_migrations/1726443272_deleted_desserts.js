/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lf88o714mjnep7e");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "lf88o714mjnep7e",
    "created": "2024-04-06 19:16:08.388Z",
    "updated": "2024-04-12 13:30:57.166Z",
    "name": "desserts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rdy4z9ln",
        "name": "dessertName",
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
        "id": "35xpmtch",
        "name": "description",
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
        "id": "p9wahsuv",
        "name": "price",
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
})
