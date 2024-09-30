/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "tlrg5l1ur2n6zko",
    "created": "2024-06-26 20:23:58.476Z",
    "updated": "2024-06-26 20:23:58.476Z",
    "name": "appetizers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "f9y8drpt",
        "name": "appName",
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
        "id": "wzgwf5n9",
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
  const collection = dao.findCollectionByNameOrId("tlrg5l1ur2n6zko");

  return dao.deleteCollection(collection);
})
