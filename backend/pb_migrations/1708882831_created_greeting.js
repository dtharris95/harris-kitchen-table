/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hcjlt3263z0ifhm",
    "created": "2024-02-25 17:40:31.893Z",
    "updated": "2024-02-25 17:40:31.893Z",
    "name": "greeting",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tpz37vlf",
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
  const collection = dao.findCollectionByNameOrId("hcjlt3263z0ifhm");

  return dao.deleteCollection(collection);
})
