const pessoa = {
    saudacao : 'bom dia',
    falar()
    {
        console.log(this.saudacao)
    } 
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e OO

const falardepessoa = pessoa.falar.bind(pessoa)
falardepessoa()

const falar2 = pessoa.falar
falar2()