// estrategia 1 para gerar valor padrao / meio paia
function soma1(a, b , c)
{
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(2), soma1(0), soma1(1, 2, ' rato'))
// o "0" não funciona nessa estratégia

// estrategia 2, 3 e 4 para gerar valor padrao
function soma2(a, b, c)
{
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN (c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(1,2,3,3), soma2(0,0,0))

// valor padrao do es2015 (forma mais prática, utilizar apenas essa)
function soma3(a = 1, b = 1, c = 1)
{
    return a + b + c
}

console.log(soma3(0, 0 , 0), soma3(1, 1, 1), soma3())