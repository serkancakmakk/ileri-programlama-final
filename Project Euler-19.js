var pazar=0;
//pazar değişkenini 0 olarak tanımladım
//yıl 1901dir ve yılı 2000 olana kadar arttırız
//ay 1 olarak başlar ve 12 olana kadar arttırılır
// yıl ve aya 1 gün eklenir  ilk gün pazara denk geldiğinde  pazara 1  eklenir.
for (var year = 1901; year <= 2000; year++) {
    for (var month = 1; month <= 12; month++) {
        if ((new Date(year, month, 1)).getDay() == 0) {
            pazar++;
        }
    }
}

console.log(pazar);
