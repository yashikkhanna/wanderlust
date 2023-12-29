const express = require("express");
const router=express.Router({mergeParams:true});
const wrapAsync= require("../utils/wrapAsync.js");
const ExpressError=require('../utils/ExpressError.js')
const {validateReview, isLoggedIn,isReviewAuthor}=require("../middlewares.js");
const Review= require("../models/review.js");
const Listing = require("../models/listening.js");
const reviewController=require("../controllers/reviews.js");



//reviews
//post route

router.post("/" ,isLoggedIn, wrapAsync(reviewController.createReview));

//delete rivew route

router.delete("/:reviewId", wrapAsync (reviewController.deleteReview));

module.exports=router;