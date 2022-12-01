import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';

import app from '../../src/index';

describe('User APIs Test', () => {
  before((done) => {
    const clearCollections = () => {
      for (const collection in mongoose.connection.collections) {
        mongoose.connection.collections[collection].deleteOne(() => {});
      }
    };

    const mongooseConnect = async () => {
      await mongoose.connect(process.env.DATABASE_TEST);
      clearCollections();
    };

    if (mongoose.connection.readyState === 0) {
      mongooseConnect();
    } else {
      clearCollections();
    }

    done();
  });



//Testcase for invalid firstname having less than 4 characters
describe('UserRegistration', () => {
  const userDetails={
    "firstname":"Rit",
    "lastname":"Patil",
    "email":"rutujapatil@gmail.com",
    "password":"Rutuja@1234"
  }
  it('Given user registration details should not be saved in database', (done) => {
    request(app)
      .post('/api/v1/users/Register')
      .send(userDetails)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(500);
        done();
      });
    });
  });

//Testcase for invalid firstname,first letter is not capital
describe('UserRegistration', () => {
  const userDetails={
    "firstname":"ritu",
    "lastname":"Patil",
    "email":"rutujapatil@gmail.com",
    "password":"Rutuja@1234"
  }
  it('Given user registration details should not be saved in database', (done) => {
    request(app)
      .post('/api/v1/users/Register')
      .send(userDetails)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(500);
        done();
      });
    });
  });

//Testcase for invalid lastname,having less than 4 characters
describe('UserRegistration', () => {
  const userDetails={
      "firstname":"Rutuja",
      "lastname":"Pat",
      "email":"rutujapatil@gmail.com",
      "password":"Rutuja@1234"
  }
  it('Given user registration details should not be saved in database', (done) => {
    request(app)
      .post('/api/v1/users/Register')
      .send(userDetails)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(500);
        done();
      });
    });
  });

//Testcase for invalid lastname,,first letter is not capital
describe('UserRegistration', () => {
  const userDetails={
      "firstname":"Rutuja",
      "lastname":"pati",
      "email":"rutujapatil@gmail.com",
      "password":"Rutuja@1234"
  }
  it('Given user registration details should not be saved in database', (done) => {
    request(app)
      .post('/api/v1/users/Register')
      .send(userDetails)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(500);
        done();
      });
    });
  });

//Testcase for invalid email
describe('UserRegistration', () => {
  const userDetails={
      "firstname":"Rutuja",
      "lastname":"Patil",
      "email":"rutujagmail.com",
      "password":"Rutuja@1234"
  }
  it('Given user registration details should not be saved in database', (done) => {
    request(app)
      .post('/api/v1/users/Register')
      .send(userDetails)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(500);
        done();
      });
    });
  });

//Testcase for invalid password,password should be minimum 8 characters long
describe('UserRegistration', () => {
  const userDetails={
      "firstname":"Rutuja",
      "lastname":"Patil",
      "email":"rutujapatil@gmail.com",
      "password":"Rutu@1"
  }
  it('Given user registration details should not be saved in database', (done) => {
    request(app)
      .post('/api/v1/users/Register')
      .send(userDetails)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(500);
        done();
      });
    });
  });

//Testcase for invalid password,password should be maximum 15 characters long
describe('UserRegistration', () => {
  const userDetails={
      "firstname":"Rutuja",
      "lastname":"Patil",
      "email":"rutujapatil@gmail.com",
      "password":"Rutujapatil@1456"
  }
  it('Given user registration details should not be saved in database', (done) => {
    request(app)
      .post('/api/v1/users/Register')
      .send(userDetails)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(500);
        done();
      });
    });
  });

//Testcase for invalid password,password not containing capital letter
describe('UserRegistration', () => {
  const userDetails={
      "firstname":"Rutuja",
      "lastname":"Patil",
      "email":"rutujapatil@gmail.com",
      "password":"rutuja@11"
  }
  it('Given user registration details should not be saved in database', (done) => {
    request(app)
      .post('/api/v1/users/Register')
      .send(userDetails)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(500);
        done();
      });
    });
  });

//Testcase for invalid password,password not containing small letter
describe('UserRegistration', () => {
  const userDetails={
      "firstname":"Rutuja",
      "lastname":"Patil",
      "email":"rutujapatil@gmail.com",
      "password":"rutuja@11"
  }
  it('Given user registration details should not be saved in database', (done) => {
    request(app)
      .post('/api/v1/users/Register')
      .send(userDetails)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(500);
        done();
      });
    });
  });

//Testcase for invalid password,password not containing special character
describe('UserRegistration', () => {
  const userDetails={
      "firstname":"Rutuja",
      "lastname":"Patil",
      "email":"rutujapatil@gmail.com",
      "password":"rutuja@11"
  }
  it('Given user registration details should not be saved in database', (done) => {
    request(app)
      .post('/api/v1/users/Register')
      .send(userDetails)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(500);
        done();
      });
    });
  });

  //Testcase for invalid password,password not contain number
describe('UserRegistration', () => {
  const userDetails={
      "firstname":"Rutuja",
      "lastname":"Patil",
      "email":"rutujapatil@gmail.com",
      "password":"rutuja@11"
  }
  it('Given user registration details should not be saved in database', (done) => {
    request(app)
      .post('/api/v1/users/Register')
      .send(userDetails)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(500);
        done();
      });
    });
  });

//Testcase for data not found
describe('UserRegistration', () => {
  const userDetails={
    "firstname":"Rutuja",
    "lastname":"Patil",
    "email":"rutujapatil@gmail.com",
    "password":""
  }
  it('Given user registration details should not be saved in database', (done) => {
    request(app)
      .post('/api/v1/users/Register')
      .send(userDetails)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(500);
        done();
      });
    });
  });  

//Testcase for all fields empty
describe('UserRegistration', () => {
  const userDetails={
    "firstname":"",
    "lastname":"",
    "email":"",
    "password":""
  }
  it('Given user registration details should not be saved in database', (done) => {
    request(app)
      .post('/api/v1/users/Register')
      .send(userDetails)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(500);
        done();
      });
    });
  }); 
  
//Test case for user registration with valid data
describe('UserRegistration', () => {
  const userDetails={
    "firstname":"Ritika",
    "lastname":"Patil",
    "email":"Ritika123@gmail.com",
    "password":"ritiKa@1234"
  }
  it('Given user registration details should be saved in database', (done) => {
    request(app)
      .post('/api/v1/users/Register')
      .send(userDetails)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(201);
        done();
      });
    });
  });

//Test case for login with invalid email
describe('UserLogin', () => {
  const loginDetails={
    "email":"ritz@gmail.com",
    "password":"Ritz@1234"
  }
  it('Given unregistered user login details should not get logged in', (done) => {
    request(app)
      .post('/api/v1/users/login')
      .send(loginDetails)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(500);
        done();
      });
    });
  });

//Test case for login with invalid password
describe('UserLogin', () => {
  const loginDetails={
    "email":"shraddha123@gmail.com",
    "password":"shar1234"
  }
  it('Given invalid password login details should not get logged in', (done) => {
    request(app)
      .post('/api/v1/users/login')
      .send(loginDetails)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(500);
        done();
      });
    });
  });

//Test case for login with password data not found
describe('UserLogin', () => {
  const loginDetails={
    "email":"Sivkapoor@gmail.com",
    "password":""
  }
  it('Given invalid password login details should not get logged in', (done) => {
    request(app)
      .post('/api/v1/users/login')
      .send(loginDetails)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(500);
        done();
      });
    });
  });

//10.Test case for login with password data not found
/*describe('UserLogin', () => {
  const loginDetails={
    "email":"Sivkapoor@gmail.com",
    "password":"Shivansh@12"
  }
  it('Given invalid password login details should not get logged in', (done) => {
    request(app)
      .post('/api/v1/users/login')
      .send(loginDetails)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(201);
        done();
      });
    });
  });*/
});
