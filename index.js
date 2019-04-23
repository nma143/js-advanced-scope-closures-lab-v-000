function produceDrivingRange(range)
{
  return function(block1, block2){
    let block1Num = parseInt(block1);
    let block2Num = parseInt(block2);
    let distance = Math.abs(block2Num-block1Num);
    let rangeOffset = Math.abs(range-distance);
    if (distance>range) {
      return `%{rangeOffset} blocks out of range`
    }
    else {
      return `within range by %{rangeOffset}`
    }




  };
};
