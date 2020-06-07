/**
 * @param {number} x
 * @return {boolean}
 *
 */
const isPalindrome = x => {
    if (x < 0) return false
    let tdöndür = 0, y = x
    while (y > 0) {
        const sonbasamak = y % 10
        tdöndür = (tdöndür * 10) + sonbasamak
        y = (y / 10) | 0
    }
    return x === tdöndür
}
   İlk olarak negatif bir olmayacağı için negatif sayıları false döndürüyoruz. x ve y ‘yi birbirine eşit olarak alıyoruz y 0 dan büyükse sonbasamağın modunu alırıyoruz ters döndürülen (tdöndür)’i 10 la çarpıp son basamaktayı sayıyla topluyoruz. Y’yi y/10 yapar ve x ile tdöndür hem tipini hemde değerini karşılaştırır.
