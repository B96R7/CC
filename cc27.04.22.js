// Return true if the cuboid could have equal sides, return false otherwise.
var cubeChecker = function(volume, side){
    return (volume / side / side) === side && (volume / side / side) > 0
  };

