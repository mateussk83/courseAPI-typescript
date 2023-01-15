# Cadastro de carro

**Requisito Funcional**
[x] Deve ser possivel cadastrar um novo carro
[ ] Deve ser possivel listar todas as categorias

**Regra de Negócio**
[x] Não deve ser possivel cadastrar um mesmo carro com uma placa já existente
[x] O carro deve ser cadastrado com disponibilidade por padrão
[ ] O usuario responsavel pelo cadastro deve ser um usuario administrador

# Listagem de carros

**Requisito Funcional**
[ ] Deve ser possivel listar todos os carros disponiveis
[ ] Deve ser possivel listar todos os carros disponiveis pelo nome da categoria
[ ] Deve ser possivel listar todos os carros disponiveis pelo nome da marca
[ ] Deve ser possivel listar todos os carros disponiveis pelo nome da carro

**Regra de Negócio**
[ ] O usuario não precisa estar logado no sistema

# Cadastro de Especificação no Carro

**Requisito Funcional**
[ ] Deve ser possível cadastrar uma especificação para um carro
[ ] Deve ser possivel listar todas as especificações
[ ] Deve ser possivel listar todos os carros

**Regra de Negócio**
[ ] Não deve ser possivel cadastrar uma especificação para um carro não cadastrado
[ ] Não deve ser possivel cadastrar uma especificação já existente para o mesmo carro.
[ ] O usuario responsavel pelo cadastro deve ser um usuario administrador

# Cadastro de imagens do carro

**Requisito Funcional**
[ ] Deve ser possível cadastrar a imagem do carro
[ ] Deve ser possível listar todos os carros

**Requisito não Funcional**
[ ] Utilizar o multer para upload dos arquivos

**Regra de Negócio**
[ ] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
[ ] O usuário responsavel pelo cadastro deve ser um usuário administrador

## Aluguel de Carro

**Requisito Funcional**
[ ] Deve ser possível cadastrar um aluguel

**Regra de Negócio**
[ ] O aluguel deve ter duração mínima de 24 horas.
[ ] Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo usuario
[ ] Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo carro
