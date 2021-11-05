const sinon = require('sinon');
const { expect } = require('chai');

const taskController = require('../../controllers/userController');

describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', () => {
    it('deve retornar um erro', () => {
      const req = {
        body: {}
      };
            
      const res = {
        status: sinon.spy(),
        json: sinon.spy(),
      };
            
      res.status = sinon.stub()
        .returns(res);
      res.json = sinon.stub()
        .returns();  
    it('é chamado o status com o código 500', async () => {
      await taskController.create(req, res);
    
      expect(res.status.calledWith(500)).to.be.true;
      });
    });

describe('quando o payload informado é válido', () => {
  it('é chamado o status com o código 201', async () => {
    const req = {
      body: {
      text: 'teste',
      edit: false,
      active: true,
      }
      };

      const res = {
        status: sinon.spy(),
        json: sinon.spy(),
      };

      res.status = sinon.stub()
        .returns(res);
      res.json = sinon.stub()
        .returns();

      await taskController.create(req, res);

      expect(res.status.calledWith(201)).to.be.true;

    }); 
  });
 });
});
