var countUnique = function(prev, current, index, array) {
    if (index === 1) prev = 1;
    return prev + (current !== array[index - 1] ? 1 : 0);
};

var countDistinctPowers = function(maxBase, maxExponent) {
    var count = 0;
    var visited = [];
    // countu 0 olarak tanımlarız
    //visitedide bir dizi olarak tanımlarız

    for (var a = 2; a <= maxBase; a++) {
        var powers = [];
        if (!visited[a]) {
            for (var m = 1, newBase; (newBase = Math.pow(a, m)) <= maxBase; m++) {
                visited[newBase] = true;
                for (var b = 2; b <= maxExponent; b++) {
                    powers.push(m * b);
                    // a yı 2 olarak tanımlarız 
                    //powers dizisini boş olarak tanımlarız
                    //visited dizisinde a yoksa for döngüsünü başlatırız
                    // m yi 1 olarak tanımlarız a nın m kuvveti max baseden küçükse veya eşitse m'yi arttırız
                    //b yi 2 olarak tanımlayıp b maxExponentten küçük veya eşit olana b'yi arttırız
                    // powers dizinin sonuna m*b yi ekleriz
                }
            }
            count += powers.sort().reduce(countUnique);
            // count + powers dizinini sıralayıp baştan başlayıp dizideki sayıları çıkarırız.
        }
    }

    return count;
    // countu döndürüürz
};

console.log(countDistinctPowers(100, 100));