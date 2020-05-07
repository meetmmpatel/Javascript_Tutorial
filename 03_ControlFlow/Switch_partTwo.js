/**
 * How to switch can also execute function call with each case
 * Based on Case value you can have function call as well
 *
 */

//This function will return different number every time you call the function

function evenNumber(number) {
  console.log(number + " It's an even number");
}
function oddNumber(number) {
  console.log(number + " It's an odd number");
}

//This is loop with switch
for (let i = 2; i <= 10; i++) {
  switch (i) {
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
      //this is function call with args
      evenNumber(i);
      break;

    default:
      // this is function call with args
      oddNumber(i);
      break;
  }
}
