const express = require("express");

const Projects = require('../data/helpers/projectModel.js')

const router = express.Router();

// | Field       | Data Type | Metadata                                                                    |
// | ----------- | --------- | --------------------------------------------------------------------------- |
// | id          | number    | no need to provide it when creating projects, the database will generate it |
// | name        | string    | required.                                                                   |
// | description | string    | required.                                                                   |
// | completed   | boolean   | used to indicate if the project has been completed, not required            |

// // Crud
// router.post();

// // cRud
// router.get();

// // crUd
// router.put();

// // cruD
// router.delete();

module.exports = router;