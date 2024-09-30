/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zm53khk9chfsb9a");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "zm53khk9chfsb9a",
    "created": "2024-09-18 22:55:58.901Z",
    "updated": "2024-09-18 22:55:58.901Z",
    "name": "appetizers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "asnjfrd1",
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
