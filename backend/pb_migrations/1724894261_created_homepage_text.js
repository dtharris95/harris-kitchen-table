/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wvvscorim747mlq",
    "created": "2024-08-29 01:17:41.015Z",
    "updated": "2024-08-29 01:17:41.015Z",
    "name": "homepage_text",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "h4cjqtny",
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
  const collection = dao.findCollectionByNameOrId("wvvscorim747mlq");

  return dao.deleteCollection(collection);
})
