// Pythagorean tiles
function ctiles(int1, int2) {
    if (int1 > int2) {
        var int3 = int2;
        int2 = int1;
        int1 = int3;
    }

    while (int1) {
        var int3 = int2;
        int2 = int1;
        int1 = int3 % int1;
    }

    return int2;
}
var ustlimit = 100000000;
//100 milyondan küçük olacağı için bir üst limit belirtiriz
var count = 0;
var ulimit = Math.floor(Math.sqrt(ustlimit));
// üstlimitin karekökünü alır küsuratlı bir sayı ise yuvarlarız.
for (var m = 2; m <= ulimit; m++) {
    var m2 = m * m;
    for (var n = 1; n < m; n++) {
        if ((m + n) % 2 == 0 || ctiles(n, m) > 1) {
            continue;
            //for döngüsünde m'yi tanımlarız m üstlimitten küçük olduğu sürece m'yi arttırırız
            //m2'nin m*m olduğunu tanımlarız tekrar for döngüsü için n'yi tanımlarız
            // n < m olduğu sürece n'yi arttırız
            //m + n'in bölümünden kalan 0 a eşitse ve ctiles fonksiyonu birden büyükse
            //ve diğer döngüye atlar
        }
        var n2 = n * n;
        var a = m2 - n2;
        var b = 2 * m * n;
        var c = m2 + n2;
        var cevre = a + b + c;
        if (cevre >= ustlimit) {
            break;
            // n2 'yi a'yi b'yi c'yi ve cevreyi tanımlarız 
            //cevre ustlimitten büyük veya eşitse döngüden çıkar
        }
        var tile = c / (b - a);
        if (tile != Math.floor(tile)) {
            continue;
            //tile(döşenen) c / b - a olarak tanımlanır
            
        }
        var multiple = cevre;
        // multiple cevreyi eşitlenir
        while (multiple <= ustlimit) {
            count++;
            // while döngüsü ile multiple'nin üstlimitten küçük veya eşitliği doğrulanır eşit değilse eşit olana kadar arttırılır
            multiple += cevre;
            // multiple  multiple + cevreye eşit olduğu bildirilir
        }
    }
}

console.log(count);
// miktar yazdırılır