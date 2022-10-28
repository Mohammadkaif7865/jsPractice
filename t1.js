let arr = [{
    unitRangeLow: 'A8',
    unitRangeHigh: 'A10'
},
{
    unitRangeLow: 'C8',
    unitRangeHigh: 'C15'
},
{
    unitRangeLow: '23Q',
    unitRangeHigh: '23S'
}];
let hold = [];
arr.map((item) => {
    if (!Number.isInteger(Number(item.unitRangeLow.charAt(0)))) {
        let unitL = item.unitRangeLow;
        let unitH = item.unitRangeHigh;
        let low = Number(unitL.slice(1));
        let high = Number(unitH.slice(1));
        while (high >= low) {
            hold.push(`${item.unitRangeLow[0]}${low}`)
            low++;
        }
    }
    else {
        let unitL = item.unitRangeLow;
        let unitH = item.unitRangeHigh;
        let low = unitL.charCodeAt(unitL.length - 1);
        let high = unitH.charCodeAt(unitH.length - 1);
        while (high >= low) {
            hold.push(`${item.unitRangeLow.slice(0, - 1)}${String.fromCharCode(low)}`)
            low++;
        }
    }
})
console.log(hold);

