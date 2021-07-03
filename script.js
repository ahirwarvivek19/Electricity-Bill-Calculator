Date.prototype.monthDays = function () {
  var d = new Date(this.getFullYear(), this.getMonth() + 1, 0);
  return d.getDate();
}

function getUnitRate(mainAmt, mainUnit) {
  var slab = 0;
  slab = mainAmt / mainUnit;
  console.log(slab);
  return slab;
}

function calcBill(f) {
  var units = parseFloat(f.currR.value) - parseFloat(f.prevR.value);
  units = parseInt(units);
  prevDate = new Date(f.prevDate.value);
  currDate = new Date(f.currDate.value);
  console.log(prevDate);
  console.log(currDate);

  var Difference_In_Time = currDate.getTime() - prevDate.getTime();

  // To calculate the no. of days between two dates

  var noOfDays = Difference_In_Time / (1000 * 3600 * 24);

  var mainAmt = parseInt(f.mainAmt.value);
  var mainUnit = parseInt(f.mainUnit.value);
  var slab = getUnitRate(mainAmt, mainUnit)

  var bill = 0.0;

  bill = units * slab;
  bill = (bill).toFixed(2);
  if (!units) {
    $("#change").empty().html("Wrong Input");
    return;
  }
  $("#change").empty().html("&#8377;" + bill + "\n for " + noOfDays + "days " + "</br>" + "<h4>(PerUnitRate = " + slab + ")</h4>");
  var scrollPos = $("#box").offset().top;
  $(window).scrollTop(scrollPos);

}