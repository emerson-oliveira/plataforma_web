export const tasks = [
  {
    id: 1,
    parentId: 0,
    title: "Motorista 1",
    start: new Date("2019-02-21T05:00:00.000Z"),
    end: new Date("2019-02-28T12:00:00.000Z"),
    progress: 100
  },
  {
    id: 2,
    parentId: 1,
    title: "Motorista Escalado",
    start: new Date("2019-02-21T05:00:00.000Z"),
    end: new Date("2019-02-28T09:00:00.000Z"),
    progress: 65
  },{
  id: 3,
  parentId: 2,
  title: "Rota 1357",
  start: new Date("2019-02-21T05:00:00.000Z"),
  end: new Date("2019-02-22T09:00:00.000Z"),
  progress: 100
},
{
  id: 4,
  parentId: 3,
  title: "Microonibus",
  start: new Date("2019-02-21T10:00:00.000Z"),
  end: new Date("2019-02-22T09:00:00.000Z"),
  progress: 100
},
{
  id: 5,
  parentId: 3,
  title: "Onibus Convencional",
  start: new Date("2019-02-22T10:00:00.000Z"),
  end: new Date("2019-02-24T09:00:00.000Z"),
  progress: 100
},
{
  id: 8,
  parentId: 1,
  title: "Motorista Ocioso",
  start: new Date("2019-02-21T10:00:00.000Z"),
  end: new Date("2019-02-28T09:00:00.000Z"),
  progress: 30
},
{
  id: 9,
  parentId: 8,
  title: "Retorno para Unidade Sabará",
  start: new Date("2019-02-21T10:00:00.000Z"),
  end: new Date("2019-02-22T09:00:00.000Z"),
  progress: 100
},
{
  id: 10,
  parentId: 8,
  title: "Retorno da Rota 1375",
  start: new Date("2019-02-22T10:00:00.000Z"),
  end: new Date("2019-02-23T09:00:00.000Z"),
  progress: 100
},
{
  id: 11,
  parentId: 1,
  title: "Motorista de Folga",
  start: new Date("2019-02-25T10:00:00.000Z"),
  end: new Date("2019-02-27T09:00:00.000Z"),
  progress: 100
},
{
  id: 12,
  parentId: 11,
  title: "Folga Semanal",
  start: new Date("2019-02-25T10:00:00.000Z"),
  end: new Date("2019-02-26T09:00:00.000Z"),
  progress: 100
},
{
  id: 13,
  parentId: 11,
  title: "Compensação",
  start: new Date("2019-02-26T10:00:00.000Z"),
  end: new Date("2019-02-27T09:00:00.000Z"),
  progress: 100
},
{
  id: 14,
  parentId: 0,
  title: "Motorista 2 ",
  start: new Date("2019-02-26T10:00:00.000Z"),
  end: new Date("2019-02-27T09:00:00.000Z"),
  progress: 100
},
{
  id: 15,
  parentId: 0,
  title: "Motorista 3",
  start: new Date("2019-02-26T10:00:00.000Z"),
  end: new Date("2019-02-27T09:00:00.000Z"),
  progress: 100
},
{
  id: 16,
  parentId: 0,
  title: "Motorista 4",
  start: new Date("2019-02-26T10:00:00.000Z"),
  end: new Date("2019-02-27T09:00:00.000Z"),
  progress: 100
},
{
  id: 17,
  parentId: 0,
  title: "Motorista 5",
  start: new Date("2019-02-26T10:00:00.000Z"),
  end: new Date("2019-02-27T09:00:00.000Z"),
  progress: 100
},
{
  id: 18,
  parentId: 17,
  title: "Motorista 5",
  start: new Date("2019-02-26T10:00:00.000Z"),
  end: new Date("2019-02-27T09:00:00.000Z"),
  progress: 100
},
{
  id: 19,
  parentId: 16,
  title: "Motorista 5",
  start: new Date("2019-02-26T10:00:00.000Z"),
  end: new Date("2019-02-27T09:00:00.000Z"),
  progress: 100
},
{
  id: 20,
  parentId: 14,
  title: "Motorista 5",
  start: new Date("2019-02-26T10:00:00.000Z"),
  end: new Date("2019-02-27T09:00:00.000Z"),
  progress: 100
},
{
  id: 21,
  parentId: 13,
  title: "Motorista 5",
  start: new Date("2019-02-26T10:00:00.000Z"),
  end: new Date("2019-02-27T09:00:00.000Z"),
  progress: 100
},
{
  id: 22,
  parentId: 15,
  title: "Motorista 5",
  start: new Date("2019-02-26T10:00:00.000Z"),
  end: new Date("2019-02-27T09:00:00.000Z"),
  progress: 100
}
];


export const dependencies = [];

export const resources = [];

export const resourceAssignments = [];
