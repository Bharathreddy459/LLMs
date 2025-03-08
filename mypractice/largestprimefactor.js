function largestprimefactor(n){
    var maxpf = 1;
    while((n%2)==0){
            maxpf=2;
            n=n/2;      
    }

    for(var j = 3; j<=Math.sqrt(n);j=j+2){

        while ((n%j) == 0){
            n=n/j;
            maxpf = j;
        }

    }
    if(n>2){
        maxpf = n;
    }

    return maxpf;
}

var op = largestprimefactor(6789)

console.log(op)
