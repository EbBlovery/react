
export function getTime(beforeDayNum) {
	var d = new Date();
	var endDate = dateToString(d);
	d = d.valueOf();
	d = d - beforeDayNum * 24 * 60 * 60 * 1000;
	d = new Date(d);
	var startDate = dateToString(d);
	return startDate.split("-").join("");
}
function dateToString(d) {
	var y = d.getFullYear();
	var m = d.getMonth() + 1;
	var d = d.getDate();
	if (m.toString().length == 1) m = "0" + m;
	if (d.toString().length == 1) d = "0" + d;
	return y + "-" + m + "-" + d;
}