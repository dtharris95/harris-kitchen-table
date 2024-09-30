/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("io61xrvrqkvmbs0");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "io61xrvrqkvmbs0",
    "created": "2024-04-06 19:15:59.285Z",
    "updated": "2024-04-06 19:15:59.285Z",
    "name": "sides",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "raxcvo6k",
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
})
