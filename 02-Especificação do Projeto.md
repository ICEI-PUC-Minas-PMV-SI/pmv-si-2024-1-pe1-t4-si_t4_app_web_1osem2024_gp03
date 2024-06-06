# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Este projeto busca a disseminação de informações sobre a dengue para a
população através de um chatbot.

A dengue é uma doença transmitida por mosquitos que representa um
problema de saúde pública significativo em muitas partes do mundo, incluindo
o Brasil. O chatbot oferece uma experiência conversacional de forma
humanizada que instrui o usuário sobre prevenção e controle do vetor do vírus.

## Personas

### 1. Maria 
Maria é uma secretária de 32 anos, gestante e que possui 3 cachorros.
Ela mora em uma área urbana com constantes focos de dengue. Maria
se encaixa no grupo de risco da dengue. Apesar de ser uma doença de
conhecimento geral, ela busca se prevenir contra o mosquito através de
informações atualizadas e de fácil acesso.

### 2. Antônio 
Antônio é um aposentado de 72 anos, vivendo em uma área urbana
isolada do centro de sua cidade, onde a dengue tem se proliferado
rapidamente. Por sua idade avançada, saúde é uma preocupação
constante e é crucial que ele esteja informado sobre epidemias.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO...          | QUERO/PRECISO ...                  |PARA ...                                |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Identificar um quadro de dengue    | Saber se há necessidade de ir ao hospital |
|Administrador       | Atualizar informações sobre dengue | Manter o usuário informado a respeito da proliferação da doença |

### História 1
Maria lê em um grupo de WhatsApp que o número de casos de dengue
em seu bairro aumentou drasticamente. Preocupada por sua saúde e
gestação, ela decide se informar para prevenir possíveis focos de
dengue em sua residência.
Maria encontra através da Dengosa inúmeras formas de prevenir que
sua casa se torne um foco da doença. Ela põe em prática as
recomendações de evitar água parada higienizando e trocando
constantemente a água das vasilhas de água para os cachorros
espalhadas pelos cômodos de sua casa.

### História 2
Depois de um estado febril durante a madrugada, Antônio acorda com
uma leve dor de cabeça. Sem tempo e disposição para ir no hospital de
imediato, ele inicia uma conversa com o ChatBot da Dengosa. Após o
idoso relatar seus sintomas, o ChatBot identifica um possível quadro de
dengue e recomenda a ida de Antônio ao hospital.

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.


### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário se informe via chatbot | ALTA | 
|RF-002| O chatbot deverá ter uma linguagem de fácil compreensão | ALTA |
|RF-003| Enviar alertas automáticos aos usuários sobre surtos de dengue em sua localidade | MÉDIA |
|RF-004| Divulgar pontos de vacinação contra a dengue | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Manter o chatbot disponível 24 horas por dia 7 dias por semana para o acesso em qualquer horário |  ALTA | 
|RNF-003| Possuir uma interface intuitiva, simples e prática |  MÉDIA |
|RNF-004| A aplicação deverá lidar com grande volume de usuários simultâneos para casos de alta demanda |  ALTA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| A aplicação deverá seguir as diretrizes da Lei Geral de Proteção de Dados (LGPD) |
|03| O projeto depende da disponibilidade de dados atualizados e confiáveis sobre a dengue |
|03|A aplicação pode estar sujeita a regulamentação e revisão por autoridades da saúde |
