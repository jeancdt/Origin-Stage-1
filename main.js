// variáveis: let ou const
// const é constante, ou seja, não poderá ser mudado
// let é algo que poderá ser alterado

// let accept= true
// let user= {
//     name: "Jean De Toni",
//     phone: 123
// }
    // Isso, como são dados "pessoais", pode ser jogado dentro de um "bloco" chamado Usuario,
    // mas não necessariamente precisa ser, pode ser fora do bloco e ter sua própria indentificação (let ou const)
    // CUIDADO: os itens dentro do bloco só poder ser feitos com ":" e separados por VÍRGULA, e os de fora apenas com "="
            
// alert(user.name)
    // Utilizamos o .nomedoitem para selecionar o item que queremos mostrar no alerta
    // item este, que pertence ao "bloco" user
    // Pode ser utilizado para trocar o valor da variavel tambéjm, ex: "user.name= "Jota""

// function showMeSomething(texto) {
    //     alert(texto)
    // }

const linksSocialMedia = {
    github: "jeancdt",
    youtube: "@jeandetoni",
    instagram: "jean_detoni",
    facebook: "jeancdetoni",
    twitter: "jeandetoni"
}
                        
    // showMeSomething ("github")
        // o que está em parenteses será transformado no texto da função showme e, consequentemente,
        // será mostrado no alert

function changeLinks() {
    // document.getElementById("userName").textContent = "Jean De Toni"
    //     o modo de cima é o modo "completo" e, também, utilizado para tags e classes,
    //     porém, para ID, o de baixo faz a mesma coisa que esse, mas simplificado
    // userName.textContent = "Jean De Toni"

    // for(let i = 0; i <= 10; i++) {
        // Diz que, enquanto "i", for maior que 0 e até igual 10, ele fará algo e se "auto-somará" 
    // i++ = i = i + 1
    //     alert (i)
    // }

for (let li of socialLinks.children) {
    // É a mesma coisa que o for de cima, porém, repetirá até os "filhos" acabarem
    const social = li.getAttribute("class")
                    
    // alert (li.children[0].href)
        // O "0" representará o 1 filho, visto que, o computador conta = 01234...

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
        // O `${}` é para utilizar um comando dentro do texto
            // Estamos dizendo para o computador colocar o link da "social" que será trocado
            // na "const" do "for" e, após isso, depois do ".com", pegamos o final do link
            // salvo em "const linksSocialMedia" pela "social" dele. Esse é o motivo para as
            // "class" terem o mesmo nome dos itens do "linkSocialMedia"
    }
}
            
changeLinks()

function getGithubProfileInfo() {
    const url= `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
        .then(response => response.json())
            // Pegará o que a url "entregará" para ele
            // ".then" também é chamado de "promisse" = uma promessa de pegar alguma coisa
            // Quando o fetch pega algo, ele não sabe qual o "modelo" daquilo, por isso, a gente coloca a "resposta.json",
            // para colocar ela em arquivo de texto legível

            // ARROW FUNCTIONS
                // É uma forma simplificada de escrever uma função, fazendo ela não ter nome e ser meio que "anonima"
                // Ao inves de escrever: "function nomeDaFunção (argumentos) {}"
                // Escrevemos: "argumentos => {}"
                // Criando com isso, uma função "anonima", visto que, ela não tem um nome
        
        .then(data => {
            userName.textContent = data.name
                // LEMBRAR QUE: para trocar alguma escrita, utilizar o ".textContent"
            userBio.textContent = data.bio
            userLink.href = data.html_url
                // LEMBRAR QUE: para trocar algo dentro de um "href", utilizar o ".href"
            userImage.src = data.avatar_url
                // LEMBRAR QUE: para trocar algo dentro de um "src", utilizar o ".src"
            userLogin.textContent = data.login
                // Transformamos o user do github em span para conseguir modifica-lo sem tirar a img do github
        })   
}

getGithubProfileInfo()