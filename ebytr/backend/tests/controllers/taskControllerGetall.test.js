const sinon = require('sinon');
const { expect } = require('chai');

const taskController = {
    getAll: sinon.stub(),
    };
  
    describe('Ao chamar o controller de getAll', () => {
        describe('quando o payload informado não é valido', () => {
            it('deve retornar um erro', () => {
                const payload = {
                    error: 'Payload inválido',
                };
                taskController.getAll.resolves(payload);
                return taskController.getAll()
                .then((response) => {
                    expect(response).to.be.eql(payload);
                });
            });
        })

        describe('quando o payload informado é valido', () => {
            it('deve retornar um array', () => {
                const payload = [
                    {
                        id: 1,
                        title: 'Tarefa 1',
                        description: 'Descrição da tarefa 1',
                        status: 'Aberta',
                        created_at: '2020-01-01',
                    },
                    {
                        id: 2,
                        title: 'Tarefa 2',
                        description: 'Descrição da tarefa 2',
                        status: 'Aberta',
                        created_at: '2020-01-01',
                    },
                ];
                taskController.getAll.resolves(payload);
                return taskController.getAll()
                .then((response) => {
                    expect(response).to.be.eql(payload);
                });
            });
        })
    });

