import { expect } from 'chai';
import request from 'supertest';
import mongoose from 'mongoose';

import app from '../../src/index';

describe('User APIs Test', () => {
  before((done) => {
    const clearCollections = () => {
      for (const collection in mongoose.connection.collections) {
        mongoose.connection.collections[collection].deleteOne(() => { });
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

  var token;
  var noteID;

  //Testcase for invalid firstname having less than 4 characters
  describe('UserRegistration', () => {
    const userDetails = {
      "firstname": "Rit",
      "lastname": "Patil",
      "email": "rutujapatil@gmail.com",
      "password": "Rutuja@1234"
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
    const userDetails = {
      "firstname": "ritu",
      "lastname": "Patil",
      "email": "rutujapatil@gmail.com",
      "password": "Rutuja@1234"
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
    const userDetails = {
      "firstname": "Rutuja",
      "lastname": "Pat",
      "email": "rutujapatil@gmail.com",
      "password": "Rutuja@1234"
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
    const userDetails = {
      "firstname": "Rutuja",
      "lastname": "pati",
      "email": "rutujapatil@gmail.com",
      "password": "Rutuja@1234"
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
    const userDetails = {
      "firstname": "Rutuja",
      "lastname": "Patil",
      "email": "rutujagmail.com",
      "password": "Rutuja@1234"
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
    const userDetails = {
      "firstname": "Rutuja",
      "lastname": "Patil",
      "email": "rutujapatil@gmail.com",
      "password": "Rutu@1"
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
    const userDetails = {
      "firstname": "Rutuja",
      "lastname": "Patil",
      "email": "rutujapatil@gmail.com",
      "password": "Rutujapatil@1456"
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
    const userDetails = {
      "firstname": "Rutuja",
      "lastname": "Patil",
      "email": "rutujapatil@gmail.com",
      "password": "rutuja@11"
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
    const userDetails = {
      "firstname": "Rutuja",
      "lastname": "Patil",
      "email": "rutujapatil@gmail.com",
      "password": "rutuja@11"
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
    const userDetails = {
      "firstname": "Rutuja",
      "lastname": "Patil",
      "email": "rutujapatil@gmail.com",
      "password": "rutuja@11"
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
    const userDetails = {
      "firstname": "Rutuja",
      "lastname": "Patil",
      "email": "rutujapatil@gmail.com",
      "password": "rutuja@11"
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
    const userDetails = {
      "firstname": "Rutuja",
      "lastname": "Patil",
      "email": "rutujapatil@gmail.com",
      "password": ""
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
    const userDetails = {
      "firstname": "",
      "lastname": "",
      "email": "",
      "password": ""
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
    const userDetails = {
      "firstname": "Ritika",
      "lastname": "Patil",
      "email": "Ritika123@gmail.com",
      "password": "ritiKa@1234"
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

  //Test case for login with valid user
  describe('UserLogin', () => {
    const loginDetails = {
      "email": "Ritika123@gmail.com",
      "password": "ritiKa@1234"
    }
    it('Given email and password login details should get logged in', (done) => {
      request(app)
        .post('/api/v1/users/login')
        .send(loginDetails)
        .end((err, res) => {
          token = res.body.data;
          expect(res.statusCode).to.be.equal(200);
          done();
        });
    });
  });
  //Test case for login with invalid email
  describe('UserLogin', () => {
    const loginDetails = {
      "email": "ritz@gmail.com",
      "password": "Ritz@1234"
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
    const loginDetails = {
      "email": "shraddha123@gmail.com",
      "password": "shar1234"
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
    const loginDetails = {
      "email": "Sivkapoor@gmail.com",
      "password": ""
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
  // Test case for create note
  describe('createNote', () => {
    const noteBody = {
      title: "Java Script",
      description: "js is is a lightweight, interpreted language"
    }
    it('Given note details should be saved in database', (done) => {
      request(app)
        .post('/api/v1/note/create')
        .set('authorization', `Bearer ${token}`)
        .send(noteBody)
        .end((err, res) => {
          noteID = res.body.data._id;
          expect(res.statusCode).to.be.equal(201);
          done();
        });
    });
  });

  //Test case for create note without authorization
  describe('createNote', () => {
    it('Given creating note without authorization should not saved in database', (done) => {
      const noteBody = {
        title: "Java Basics",
        description: "Concept"
      }
      request(app)
        .post('/api/v1/note/create')
        .send(noteBody)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(400);
          done();
        });
    });
  });

  //Test case for invalid note description
  describe('createNote', () => {
    it('Given creating notes with invalid note title status should return 500', (done) => {
      const noteBody = {
        title: "Java Basics",
        description: ""
      }
      request(app)
        .post('/api/v1/note/create')
        .set('authorization', `Bearer ${token}`)
        .send(noteBody)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(500);
          done();
        });
    });
  });

  //Test case for invalid note title
  describe('Notes-Create', () => {
    it('Given creating notes with invalid note title status should return 500', (done) => {
      const noteBody = {
        title: "",
        description: "Good Morning"
      }
      request(app)
        .post('/api/v1/note/create')
        .set('authorization', `Bearer ${token}`)
        .send(noteBody)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(500);
          done();
        });
    });
  });

  //Test case for get all notes with authorization
  describe('Get all note', () => {
    it('Given invalid authorization getting all notes successfully should return status code 201', (done) => {
      request(app)
        .get('/api/v1/note/allNote')
        .set('authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(201);
          done();
        });
    });
  });

  //Test case for get all notes without authorization
  describe('Get all note', () => {
    it('invalid authorization getting all notes failed it should return status code 400', (done) => {
      request(app)
        .get('/api/v1/note/allNote')
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(400);
          done();
        });
    });
  });

  //Test case for get note by ID with authorization
  describe(' Get note by id', () => {
    it('Given valid authorization get note by id successfully done should return status code 201', (done) => {
      request(app)
        .get(`/api/v1/note/${noteID}`)
        .set('authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(201);
          done();
        });
    });
  });

  // 16 - Test case for get note by ID without authorization
  describe(' Get note by id', () => {
    it('Given invalid authorization get note by id successfully done should return status code 400', (done) => {
      request(app)
        .get(`/api/v1/note/${noteID}`)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(400);
          done();
        });
    });
  });

  //Test case for update note by ID with authorization
  describe(' Update note by id ', () => {
    it('Given authorization updating note by ID should successful and return status code 202', (done) => {
      const noteBody = {
        title: "Javascript concept",
        description: "Basic"
      }
      request(app)
        .put(`/api/v1/note/${noteID}`)
        .set('authorization', `Bearer ${token}`)
        .send(noteBody)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(202);
          done();
        });
    });
  });

  // 18 - Test case for update note by ID without authorization
  describe(' Update note by id ', () => {
    it('Given authorization updating note by ID should failed andreturn status code 400', (done) => {
      const noteBody = {
        title: "Javascript concept",
        description: "js is object-oriented language with first-class functions"
      }
      request(app)
        .put(`/api/v1/note/${noteID}`)
        .send(noteBody)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(400);
          done();
        });
    });
  });

  // 21 - Test case for delete note by ID with authorization
  describe(' Delete note by id ', () => {
    it('Given authorization delete note by ID should successful and return status code 200', (done) => {
      request(app)
        .delete(`/api/v1/note/${noteID}`)
        .set('authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(200);
          done();
        });
    });
  });

  //Test case for delete note by ID without authorization
  describe('delete note by id', () => {
    it('Given authorization updating note by ID should fail and return status code 400', (done) => {
      request(app)
        .delete(`/api/v1/note/${noteID}`)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(400);
          done();
        });
    });
  });
  //Test case for delete note by invalid ID with authorization
  describe(' Update note by id with authorization ', () => {
    it('Given invalid id deleting note by id failed should return status code 500', (done) => {
      request(app)
        .delete(`/api/v1/note/shdfkjhllakood`)
        .set('authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(500);
          done();
        });
    });
  });

  //Test case for archive note by ID with authorization
  describe(' Archive note by id with authorization ', () => {
    it('Given valid id archive note by ID successfully complete should return status code 202', (done) => {
      request(app)
        .put(`/api/v1/note/${noteID}/archive`)
        .set('authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(202);
          done();
        });
    });
  });

  //Test case for archive note by ID without authorization
  describe(' Archive note by id with authorization ', () => {
    it('Given valid id archive note by ID successfully complete should return status code 400', (done) => {
      request(app)
        .put(`/api/v1/note/${noteID}/archive`)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(400);
          done();
        });
    });
  });

  //Test case for archive note by ID with invalid id
  describe(' Archive note by id with authorization ', () => {
    it('Given valid id archive note by ID successfully complete should return status code 500', (done) => {
      request(app)
        .put(`/api/v1/note/sdhgfisefgiaw/archive`)
        .set('authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(500);
          done();
        });
    });
  });

  //Test case for trash note by ID with authorization
  describe('Trash note by id', () => {
    it('Given valid id trash note by ID successfully complete should return status code 202', (done) => {
      request(app)
        .put(`/api/v1/note/${noteID}/trash`)
        .set('authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(202);
          done();
        });
    });
  });

  //Test case for trash note by ID without authorization
  describe('Trash note by id', () => {
    it('Given valid id trash note by ID successfully complete should return status code 500', (done) => {
      request(app)
        .put(`/api/v1/note/jshkfh,afa/trash`)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(400);
          done();
        });
    });
  });
  //Test case for trash note by ID with invalid id
  describe('Trash note by id', () => {
    it('Given valid id trash note by ID successfully complete should return status code 500', (done) => {
      request(app)
        .put(`/api/v1/note/jshkfh,afa/trash`)
        .set('authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.statusCode).to.be.equal(500);
          done();
        });
    });
  });
});
