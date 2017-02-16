/**
 * Created by aksha on 2/15/2017.
 */

var bouncer = function(arr) {
  var filteredArray = arr.filter(Boolean);
  return filteredArray;
}

var getMin = function(values){
    var min_val = Math.min.apply(null,values);
    return min_val
}

var getMax = function(values){
    var max_val = Math.max.apply(null,values);
    return max_val
}

var getColor =function(data,max_val,min_val){
    var temp = (data - min_val)/(max_val-min_val)*(360);
    var color = "hsl(" + parseInt(temp) + ",100%,50%)";
    return color
}

var sortSizes = function(data) {
  var values = [];
  for (var dept in data) {
    var sum = 0;
    var bclString = '';
    for (var bcl in data[dept]) {
      var array = data[dept][bcl];
      bclString = bcl
      for (var i = 0; i < array.length; i++) {
        sum = sum + array[i].proposed;
      }
    }
    if (!isNaN(sum)) {
      values.push(sum)
    }
  }
  values = bouncer(values);
  return values;
}

var sortBclSizes = function(department,bcl) {
    var bcl_values = []
    for (var bclVar in globalData[department]) {
        var deptObj = globalData[department][bclVar];
        for (var array in deptObj) {
            var name = deptObj[array].name;
            var proposed = deptObj[array].proposed;
            if (proposed != 0) {
                bcl_values.push(proposed)
            }
        }
    }
    bcl_values = bouncer(bcl_values);
    return bcl_values;
}

//Helper function to format number as money
var formatNumberAsMoney = function(value) {
  var num = '$' + value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  return num;
}

//Resetting chart on click of RESET button
var resetChart = function() {
  location.reload(true);
}
