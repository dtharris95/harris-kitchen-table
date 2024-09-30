/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "6q1tw6q3hq95u6i",
    "created": "2024-09-10 02:01:16.067Z",
    "updated": "2024-09-10 02:01:16.067Z",
    "name": "servicespage",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8xy1cus9",
        "name": "headings",
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
        "id": "sbal7x2w",
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
  const collection = dao.findCollectionByNameOrId("6q1tw6q3hq95u6i");

  return dao.deleteCollection(collection);
})
