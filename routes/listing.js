const express = require("express");
const router=express.Router();
const wrapAsync= require("../utils/wrapAsync.js");

const Listing = require("../models/listening.js");
const {isLoggedIn , isOwner,validateListing}=require("../middlewares.js");
const listingController=require("../controllers/listings.js");

const multer  = require('multer');
const {storage}=require("../cloudConfig.js");
const upload = multer({storage});


router
.route("/")
.get( wrapAsync(listingController.index))
.post( 
   
   upload.single("listing[image]"),
   validateListing,
   wrapAsync(listingController.createListing)
);
   

   //new route
   router.get("/new",isLoggedIn,listingController.renderNewform);
   router.route("/:id")
   .get(wrapAsync(listingController.showListings))
   .put(isLoggedIn,upload.single("listing[image]") ,validateListing, wrapAsync(listingController.updateListing))
   .delete(isLoggedIn, wrapAsync(listingController.deleteListing));


  
  
  
  
  
  
   
   // edit route
  router.get("/:id/edit",isLoggedIn, wrapAsync(listingController.editListing));
  
 
 

  module.exports=router;