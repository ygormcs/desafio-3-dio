
        class Heroi {
            constructor(nome, idade, tipo){
                this.nome = nome
                this.idade = idade
                this.tipo = tipo
            }

            atacar(){
                let ataque;

            switch (this.tipo){
                case "mago":
                    ataque = "usou magia";
                    break;
                case "guerreiro":
                    ataque = "usou espada";
                    break;
                case "monge":
                    ataque = "usou artes marciais";
                    break;
                case "ninja":
                    ataque = "usou shuriken";
                    break;
                default:
                    ataque = "realizou um ataque"

            }

                console.log(`O ${this.tipo} ${this.nome} atacou usando o ataque ${ataque}`)
            }
        }


        const heroi1 = new Heroi('Herói 1', 25, 'mago');
        const heroi2 = new Heroi('Herói 2', 30, 'guerreiro');

        heroi1.atacar();
        heroi2.atacar();
        


