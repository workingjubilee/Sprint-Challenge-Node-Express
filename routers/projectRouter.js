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
router.post('/', async (req, res) => {
  const { name, description, completed } = req.body;

  if ( !name || !description ) {
    res.status(400).send("Project needs name and description text. You may include completed as a true or false.")
  } else {

    try {
      const newProject = await Projects.insert({ name, description, completed });
      res.status(200).json(newProject);

    } catch {
      res.status(500).send("Request failed.")
    }

  };
});

// cRud
router.get('/', async (req,res) => {

  try {
    const projectList = await Projects.get();
    res.status(200).json(projectList);
  } catch {
    res.status(500).send("Request failed.")
  }

});

router.get('/:id', async (req,res) => {
  const { id } = req.body;

  try {
    const project = await Projects.get(id);
    res.status(200).json(project);
  } catch {
    res.status(500).send("Request failed.")
  }

});

// // crUd
// router.put();

// // cruD
// router.delete();

module.exports = router;