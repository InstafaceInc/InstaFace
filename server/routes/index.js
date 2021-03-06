const express = require('express'); 
const router = express.Router(); 
const UserController = require('./Controllers/UserController'); 
const PhotoController = require('./Controllers/PhotoController'); 
var multer    =   require( 'multer' );
var upload    =   multer( { dest: 'uploads/' } );

//l1fb - requiring firebase DB controller
const firebaseDatabase = require('../firebaseDb');

router.route('/users/createUser')
  .post(UserController.createUser)

router.route('')
  .post(upload.single('file'), PhotoController.createPhoto)

router.route('/photos/getAllPhotos')
  .get(PhotoController.getAllPhotos)

router.route('/photos/increaseLike')
  .put(PhotoController.increaseLike)

router.route('/photos/decreaseLike')
  .put(PhotoController.decreaseLike)

router.route('/photos/getPhotoInfo')
  .get(PhotoController.getPhotoInfo)

router.route('/photos/addPhotoTags')
  .put(PhotoController.addPhotoTags)

router.route('/photos/getPhotoByTag')
  .get(PhotoController.getPhotoByTag)

router.route('/photos/addCaption')
  .put(PhotoController.addCaption)

router.route('/photos/getPhotoByUserID')
  .get(PhotoController.getPhotoByUserID)
  
module.exports = router; 


//superior spider, spider-verse, new 52 justice, the flash 2016, justice league 2011, avengers vs x-man, civil 1 and 2, infinity gauntlet (1991)