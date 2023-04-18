let Month = +prompt("Nhập vào tháng:");
let Year = +prompt("Nhập vào năm:");
let check = true;
while (check) {
  if (Month <= 0 || Month > 12 || isNaN(Month)) {
    Month = +prompt("Nhập vào tháng: ");
  } else if (Year <= 0 || isNaN(Year)) {
    Year = +prompt("Nhập vào năm: ");
  } else {
    check = false;
  }
}
if ((Year % 4 === 0 && Year % 100 !== 0) || Year % 400 === 0) {
 switch (Month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      alert(`Tháng ${Month} có 31 ngày`);
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      alert(`Tháng ${Month} có 30 ngày`);
      break;
    case 2:
      alert(`Tháng ${Month} có 29 ngày`);
      break;
  }
} else {switch (Month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      alert(`Tháng ${Month} có 31 ngày`);
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      alert(`Tháng ${Month} có 30 ngày`);
      break;
    case 2:
      alert(`Tháng ${Month} có 28 ngày`);
      break;
  }
}