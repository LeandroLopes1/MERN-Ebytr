const sinon = require('sinon');
const { expect } = require('chai');

const documentModel = require('../../models/usersModel');

describe('Busca todos os documentos no BD', () => {
  describe('quando não existe nenhum documento criado', () => {
    it('retorna um array', async () => {
      const response = await documentModel.getAll();
      expect(response).to.be.an('array');
    })
  })
  describe('quando existem documentos criados', () => {
    it('o array não está vazio', async () => {
      const response = await documentModel.getAll();
      expect(response).to.not.be.empty;
    })
    it('o array possui itens do tipo objeto', async () => {
      const response = await documentModel.getAll();
      expect(response[0]).to.be.an('object');
    })
    it('tais item possui propriedade: "_id"', async () => {
      const response = await documentModel.getAll();
      expect(response[0]).to.have.property('_id');
    })
  });
});




