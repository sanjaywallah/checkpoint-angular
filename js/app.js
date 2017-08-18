"use strict";

(function (){
angular.module("musingsApp", [
  "ui.router",
  "ngResource"
])

factory('musing', [
  "$resource",
  musingService
])

.controller('musingIndexController', [
  'Musing',
  MusingIndexControllerFunction
])


function Musing( $resource ){
      return $resource( 'http://localhost:3000/musings/:id' );
    }
    
function musingsService (){
  const musings = [
    {title: "Checkpoint", content:"You passed, not!", author: "jay",}
  ]
}

})();
