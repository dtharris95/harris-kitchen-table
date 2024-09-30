/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ew8k0kl22elllk4",
    "created": "2024-04-06 19:06:35.605Z",
    "updated": "2024-04-06 19:06:35.605Z",
    "name": "drinks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rioc9h56",
        "name": "drink1",
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
        "id": "ahr5injj",
        "name": "drink2",
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
  const collection = dao.findCollectionByNameOrId("ew8k0kl22elllk4");

  return dao.deleteCollection(collection);
})
