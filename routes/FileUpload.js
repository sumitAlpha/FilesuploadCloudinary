const express=require("express");
const router= express.Router();

//import the controller
const {localFileUpload,imageUpload,videoUpload,imageSizeReducer} = require("../controllers/fileupload");

//api route
router.post("/localFileUpload",localFileUpload);
router.post("/imageUpload",imageUpload);
router.post("/videoUpload",videoUpload);
router.post("/imageSizeReducer",imageSizeReducer);

module.exports = router;