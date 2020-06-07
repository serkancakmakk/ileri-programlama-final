var fib = function(N) {
  const list = [0,1]

while (list.length <= N){
list.push(list[list.length-1]+list[list.length-2])
    }
    return list[N]
    
}
bir sabit tanımlayıp fibonaccideki ilk iki sayıyı yazarız, son öğeye ulaşana kadar listeyi uzatırız ve N’i listeleriz .
