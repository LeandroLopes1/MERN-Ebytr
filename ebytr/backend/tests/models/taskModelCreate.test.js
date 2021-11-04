const sinon = require('sinon');
const { expect } = require('chai');
const TaskModel = require('../../models/usersModel');

describe('Insere um novo documento do BD', () => {
    const payload = {
        text: '',
        active: true,
        edit: false,
        id: '',
    };
    describe('Qndo é inserido com sucesso', () => {
        it('retorna um objeto', async () => {
            const response = await TaskModel.create(payload);
            
            expect(response).to.be.an('object');
    });
 
});
});