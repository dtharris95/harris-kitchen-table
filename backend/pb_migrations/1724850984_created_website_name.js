/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jprshmiy4e671t5",
    "created": "2024-08-28 13:16:24.582Z",
    "updated": "2024-08-28 13:16:24.582Z",
    "name": "website_name",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3tav35qi",
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
  const collection = dao.findCollectionByNameOrId("jprshmiy4e671t5");

  return dao.deleteCollection(collection);
})
