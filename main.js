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
let moonshine = new Dog ()
let atticus = new Dog ()

// function Status(normal, happy){
//   this.normal = normal;
//   this.happy = happy;
// }
// function petDoggo(pet, status){
//   if (pet === true) {
//     sadie.changeStatus("happy");
//   }
// }






//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (feed, cool) {
  this.feed = feed;
  this.cool = cool;
}

// Instances of Human
// Needed: mason, julia
  let mason = new Human()
  let julia = new Human()
