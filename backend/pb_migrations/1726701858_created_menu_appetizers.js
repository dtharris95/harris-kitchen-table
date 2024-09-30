/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "v5iczjhzc6sbu0k",
    "created": "2024-09-18 23:24:18.333Z",
    "updated": "2024-09-18 23:24:18.333Z",
    "name": "menu_appetizers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nne3zrhq",
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
        "id": "ofkmr7qr",
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
  const collection = dao.findCollectionByNameOrId("v5iczjhzc6sbu0k");

  return dao.deleteCollection(collection);
})
