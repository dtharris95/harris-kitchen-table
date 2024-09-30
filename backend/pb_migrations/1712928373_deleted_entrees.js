/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("taoziq3ebcssw8e");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "taoziq3ebcssw8e",
    "created": "2024-04-06 19:15:51.553Z",
    "updated": "2024-04-06 19:15:51.553Z",
    "name": "entrees",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8nkidgyo",
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
