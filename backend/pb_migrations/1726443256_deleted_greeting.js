/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hcjlt3263z0ifhm");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "hcjlt3263z0ifhm",
    "created": "2024-02-25 17:40:31.893Z",
    "updated": "2024-02-25 23:18:07.262Z",
    "name": "greeting",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tpz37vlf",
        "name": "greetingText",
        "type": "text",
        "required": true,
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
