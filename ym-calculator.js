
class YMCalculator {
	
	static diff(ym_start, ym_end){
		let m1 = ym_start.substr(4, 2);
	        let y1 = ym_start.substr(0, 4);

	        let m2 = ym_end.substr(4, 2);
        	let y2 = ym_end.substr(0, 4);

        	let result = 0;
		if (y1 >= y2) {
                	if (m1 >= m2) result = 12 * Math.abs(y1 - y2) + Math.abs(m1 - m2);
        	        else result = 12 * Math.abs(y1 - y2) - Math.abs(m1 - m2);
	        } else {
                	if (m1 >= m2) result = 12 * Math.abs(y1 - y2) + Math.abs(m1 - m2);
        	        result = 12 * Math.abs(y1 - y2) - Math.abs(m1 - m2);
	        }

		return Math.abs(result);
	}

}

module.exports = YMCalculator;
