# Cadastro de carro

**Requisito Funcional**</br>
[x] Deve ser possivel cadastrar um novo carro</br>

**Regra de Negócio**</br>
[x] Não deve ser possivel cadastrar um mesmo carro com uma placa já existente</br>
[x] O carro deve ser cadastrado com disponibilidade por padrão</br>
[x] O usuario responsavel pelo cadastro deve ser um usuario administrador</br>

# Listagem de carros

**Requisito Funcional**</br>
[x] Deve ser possivel listar todos os carros disponiveis</br>
[x] Deve ser possivel listar todos os carros disponiveis pelo nome da categoria</br>
[x] Deve ser possivel listar todos os carros disponiveis pelo nome da marca</br>
[x] Deve ser possivel listar todos os carros disponiveis pelo nome da carro</br>

**Regra de Negócio**</br>
[x] O usuario não precisa estar logado no sistema</br>

# Cadastro de Especificação no Carro

**Requisito Funcional**</br>
[x] Deve ser possível cadastrar uma especificação para um carro
</br>

**Regra de Negócio**</br>
[x] Não deve ser possivel cadastrar uma especificação para um carro não cadastrado.</br>
[x] Não deve ser possivel cadastrar uma especificação já existente para o mesmo carro.</br>
[x] O usuario responsavel pelo cadastro deve ser um usuario administrador</br>

# Cadastro de imagens do carro

**Requisito Funcional**</br>
[x] Deve ser possível cadastrar a imagem do carro</br>

**Requisito não Funcional**</br>
[x] Utilizar o multer para upload dos arquivos</br>

**Regra de Negócio**</br>
[x] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro</br>
[x] O usuário responsavel pelo cadastro deve ser um usuário administrador</br>

## Aluguel de Carro


**Requisito Funcional**</br>
[x] Deve ser possível cadastrar um aluguel</br>

**Regra de Negócio**</br>
[x] O aluguel deve ter duração mínima de 24 horas.</br>
[x] Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo usuario</br>
[x] Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo carro</br>
[ ] O usuário deve estar logado na aplicação