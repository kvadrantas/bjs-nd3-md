var m = [11, 12, 13, 14, 15];
console.log('Originalas: ', m);

var mLength = m.length;
var k;
var md = new Array(mLength);
for (var i = 0; i < md.length; i++) {
  md[i] = new Array(mLength);
}


for (var i = 0; i < mLength; i++) {
    for (var j = 0; j < mLength; j++) {
        k = mLength - j;
        
        if (i <= j) {
            md[i][j] = m[j - i]; 
        } else {
            md[i][j] = m[mLength - i + j]; 
        }
        }
    }

console.log('\n\nSugeneruotas:');
console.log(md);
