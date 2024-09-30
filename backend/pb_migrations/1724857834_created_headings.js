/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cumldv6k8b6zjd0",
    "created": "2024-08-28 15:10:34.184Z",
    "updated": "2024-08-28 15:10:34.184Z",
    "name": "headings",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "twqt7yp4",
        "name": "headingName",
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
  const collection = dao.findCollectionByNameOrId("cumldv6k8b6zjd0");

  return dao.deleteCollection(collection);
})
