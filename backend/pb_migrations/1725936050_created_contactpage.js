/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "59bnuraf4xk8rfz",
    "created": "2024-09-10 02:40:50.104Z",
    "updated": "2024-09-10 02:40:50.104Z",
    "name": "contactpage",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "53tdrx8c",
        "name": "mainHeading",
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
        "id": "k2lw0spu",
        "name": "subHeadings",
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
        "id": "lkvtdc30",
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
  const collection = dao.findCollectionByNameOrId("59bnuraf4xk8rfz");

  return dao.deleteCollection(collection);
})
