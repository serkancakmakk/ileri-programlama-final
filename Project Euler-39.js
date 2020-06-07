//p=120
var maxCounts = 0;
var maxP = 0;
for(var p = 0; p <= 1000; p++){
    //p 1000 olana kadar döner.
    var counts = 0;
    for(var i = 1; i < p; i++){
        // i p den küçük olana kadar i arttırılır.
        for(var j = i; j < p-i; j++){
            //j i'ye eşit p - i den küçük olana kadar j arttırılır.
            var k = p-i-j;
            
            if(i*i + j*j == k*k){
                //i² +j² = k² olursa countsu 1 arttırır.
                counts++;
                console.log (i,j,k);
            }
        }
    }
    if(counts > maxCounts){maxCounts = counts; maxP = p;}
    // count maxCountstan büyükse maxCountsu counta maxP'yi p ye eşitler 
    //Konsola maxP ve maxCountsu yazdırır.
} console.log(maxP,"Counts: " + maxCounts);
