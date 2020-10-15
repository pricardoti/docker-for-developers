# Docker compose

O Docker Compose é uma ferramenta para definir e gerenciar aplicações docker com múltiplos
containers. Neste contexto os containers são chamados de serviços.

> The term "Microservice Architecture" has sprung up over the last few years
> to describe a particular way of designing software applications as suites of
> independently deployable services.
> While there is no precise definition of this architectural style, there are
> certain common characteristics around organization around business
> capability, automated deployment, intelligence in the endpoints, and
> decentralized control of languages and data.
> — Martin Fowler, Microservices: https://martinfowler.com/articles/microservices.html

Segundo Martin Fowler, microsserviços ou arquitetura de microsserviços é uma forma de design de
aplicações de serviços independentes distribuíveis. Entre suas principais características:
- **Deploy automatizado**
- **Inteligência no uso das API's**
- Controle descentralizado de dados
- Independência de linguagens

Uso da instrução ``build`` no lugar do ``image`` para indicar a necessidade de executar um build,
neste caso do arquivo ``Dockerfile``

### Escalando o worker e especializando o log

Executando o ``docker-compose`` em modo daemon (background):
``$ docker-compose up -d``

Escalando a solução (varios workes):
``$ docker-compose scale worker=3`` 

*Obs.: Quando utilizado com o commando ``scale`` com o ``container_name: worker-pj-final`` apresenta conflito no start da execução.*

Exibindo o log:
``$ docker-compose logs -f -t worker``