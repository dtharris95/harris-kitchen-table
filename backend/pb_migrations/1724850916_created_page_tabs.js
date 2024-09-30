/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xvdwit495791rl0",
    "created": "2024-08-28 13:15:16.798Z",
    "updated": "2024-08-28 13:15:16.798Z",
    "name": "page_tabs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pggwkqic",
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
  const collection = dao.findCollectionByNameOrId("xvdwit495791rl0");

  return dao.deleteCollection(collection);
})
