# Cadastro de carro

**Requisito Funcional**
[x] Deve ser possivel cadastrar um novo carro

**Regra de Negócio**
[x] Não deve ser possivel cadastrar um mesmo carro com uma placa já existente
[x] O carro deve ser cadastrado com disponibilidade por padrão
[x] O usuario responsavel pelo cadastro deve ser um usuario administrador

# Listagem de carros

**Requisito Funcional**
[x] Deve ser possivel listar todos os carros disponiveis
[x] Deve ser possivel listar todos os carros disponiveis pelo nome da categoria
[x] Deve ser possivel listar todos os carros disponiveis pelo nome da marca
[x] Deve ser possivel listar todos os carros disponiveis pelo nome da carro

**Regra de Negócio**
[x] O usuario não precisa estar logado no sistema

# Cadastro de Especificação no Carro

**Requisito Funcional**
[x] Deve ser possível cadastrar uma especificação para um carro

**Regra de Negócio**
[x] Não deve ser possivel cadastrar uma especificação para um carro não cadastrado.
[x] Não deve ser possivel cadastrar uma especificação já existente para o mesmo carro.
[x] O usuario responsavel pelo cadastro deve ser um usuario administrador

# Cadastro de imagens do carro

**Requisito Funcional**
[x] Deve ser possível cadastrar a imagem do carro

**Requisito não Funcional**
[x] Utilizar o multer para upload dos arquivos

**Regra de Negócio**
[x] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
[x] O usuário responsavel pelo cadastro deve ser um usuário administrador

## Aluguel de Carro

**Requisito Funcional**
[ ] Deve ser possível cadastrar um aluguel

**Regra de Negócio**
[ ] O aluguel deve ter duração mínima de 24 horas.
[ ] Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo usuario
[ ] Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo carro
