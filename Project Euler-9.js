(function pisagor() {
    var a = 1;
    var b = a + 1;
    var c;
    while (a < 1000)
     {
      while (b < 1000 && b > a)
       {
        c = 1000 - a - b;
        if (c < b) 
        {
          break;
        }
        if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) 
        {
          console.log(a,b,c)
          console.log(a * b * c);
          return a * b * c;
        }
        b++;
    }
    a++;
    b = a + 1;
}
}());
        //a b c < 1000 olacağı için burada onları tanımlıyoruz eğer c < b den küçük olursa diğer
       //if bloğu devreye girer a² + b² = c² eşitliğine bakılır eşitse konsola a * b *c yazdırılır değilse 
        //a b arttırılır ve a + 1 b'ye atılır
