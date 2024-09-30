/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nu0k2fk89yoet19");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "nu0k2fk89yoet19",
    "created": "2024-04-06 19:05:51.806Z",
    "updated": "2024-04-06 19:05:51.806Z",
    "name": "entrees",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "o5equzsr",
        "name": "entree1",
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
        "id": "zcfqodqw",
        "name": "entree2",
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
