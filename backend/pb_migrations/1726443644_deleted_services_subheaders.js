/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("t3qz3793mbjqa5t");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "t3qz3793mbjqa5t",
    "created": "2024-08-28 15:14:04.914Z",
    "updated": "2024-08-28 15:14:04.914Z",
    "name": "services_subheaders",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wwacx2zq",
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
