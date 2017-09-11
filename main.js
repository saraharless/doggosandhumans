//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (status, color, hungry, owner) {
  'use strict';
  this.status = status;
  this.color = color;
  this.hungry = hungry;
  this.owner = owner;
}

// Instances of Dog
// Needed: sadie, moonshine, atticus

let sadie = new Dog ('normal', 'black', false, 'mason')
let moonshine = new Dog ('normal', ' ', true)
let atticus = new Dog ('normal', ' ', false)


//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name, feed, cool, pet) {
  this.name = name;
  //create function to alter status of feed
  this.feed = function(food){
    if(feed === true) {
      return food.hungry = false;
    }
  };
  this.cool = cool;
  //create function to alter status of pet
  this.pet = function(dog){
      if (pet === true) {
      return dog.status = 'happy';
      }
    };
}


// Instances of Human
// Needed: mason, julia


  let mason = new Human('mason', true, false, true)
  let julia = new Human('julia', true, true, false)


  // mason.pet(sadie);
