var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Sesame snaps brownie jelly marshmallow. Cheesecake candy donut ice cream jujubes pudding biscuit topping. Cake marzipan chocolate bar.Chocolate lollipop pie fruitcake chocolate cake sugar plum. Cotton candy caramels dessert tart dragée jujubes. Pastry fruitcake chupa chups cake.Cake apple pie cheesecake. Marshmallow jelly beans fruitcake croissant. Chocolate cake marshmallow tiramisu fruitcake. Wafer fruitcake jelly chocolate cake cotton candy. Marshmallow jelly jujubes croissant. Pastry liquorice apple pie sesame snaps soufflé jelly-o. Fruitcake tart gummi bears macaroon soufflé marshmallow wafer. Liquorice caramels chocolate pudding tiramisu. Sugar plum pastry muffin bear claw apple pie pudding jelly-o chupa chups cake. Cupcake marzipan toffee cake sesame snaps."
    },
    {
        name: "Desert Mesa", 
        image: "https://farm4.staticflickr.com/3859/15123592300_6eecab209b.jpg",
        description: "Sesame snaps brownie jelly marshmallow. Cheesecake candy donut ice cream jujubes pudding biscuit topping. Cake marzipan chocolate bar.Chocolate lollipop pie fruitcake chocolate cake sugar plum. Cotton candy caramels dessert tart dragée jujubes. Pastry fruitcake chupa chups cake.Cake apple pie cheesecake. Marshmallow jelly beans fruitcake croissant. Chocolate cake marshmallow tiramisu fruitcake. Wafer fruitcake jelly chocolate cake cotton candy. Marshmallow jelly jujubes croissant. Pastry liquorice apple pie sesame snaps soufflé jelly-o. Fruitcake tart gummi bears macaroon soufflé marshmallow wafer. Liquorice caramels chocolate pudding tiramisu. Sugar plum pastry muffin bear claw apple pie pudding jelly-o chupa chups cake. Cupcake marzipan toffee cake sesame snaps."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Sesame snaps brownie jelly marshmallow. Cheesecake candy donut ice cream jujubes pudding biscuit topping. Cake marzipan chocolate bar.Chocolate lollipop pie fruitcake chocolate cake sugar plum. Cotton candy caramels dessert tart dragée jujubes. Pastry fruitcake chupa chups cake.Cake apple pie cheesecake. Marshmallow jelly beans fruitcake croissant. Chocolate cake marshmallow tiramisu fruitcake. Wafer fruitcake jelly chocolate cake cotton candy. Marshmallow jelly jujubes croissant. Pastry liquorice apple pie sesame snaps soufflé jelly-o. Fruitcake tart gummi bears macaroon soufflé marshmallow wafer. Liquorice caramels chocolate pudding tiramisu. Sugar plum pastry muffin bear claw apple pie pudding jelly-o chupa chups cake. Cupcake marzipan toffee cake sesame snaps."
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;
