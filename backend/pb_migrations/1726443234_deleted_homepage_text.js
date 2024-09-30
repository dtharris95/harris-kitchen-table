/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wvvscorim747mlq");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "wvvscorim747mlq",
    "created": "2024-08-29 01:17:41.015Z",
    "updated": "2024-08-29 01:37:31.869Z",
    "name": "homepage_text",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "h4cjqtny",
        "name": "homeParagraph",
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
