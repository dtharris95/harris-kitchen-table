/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hxumem6a8qttqog",
    "created": "2024-09-07 17:03:20.553Z",
    "updated": "2024-09-07 17:03:20.553Z",
    "name": "alcohol",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rf4kkagx",
        "name": "alcoholName",
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
        "id": "hoo7ivsy",
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
  const collection = dao.findCollectionByNameOrId("hxumem6a8qttqog");

  return dao.deleteCollection(collection);
})
