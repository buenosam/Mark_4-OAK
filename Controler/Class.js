import { openDb } from "../configDB.js";




///////////////////////////////////////////////////turmas ABAIXOOOO V V V V V V

export async function createTableUsers(){
    openDb().then(db=>{
        db.exec(`CREATE TABLE
        IF NOT EXISTS turmas (
            id INTEGER PRIMARY KEY,
            nome_usuario VARCHAR(48) NOT NULL,
            senha VARCHAR(128) NOT NULL,
            tipo_usuario TEXT CHECK(tipo_usuario IN ('aluno', 'admin')
            ) NOT NULL,
        )`)
    });
}

export  async function selectUser(req, res){
    openDb().then(db=>{
         db.all('SELECT * FROM usuarios')
        .then(users=>  res.json(users))
    });
}
export  async function selectUserbyId(req, res){
    let id = req.body.id;
   openDb().then(db=>{
        db.get('SELECT * FROM usuarios WHERE id=?', [id])
        .then(user=>  res.json(user)  );
    });  
}

export  async function insertUser(req, res){
    let Turma = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO usuarios (nome_usuario, senha, tipo_usuario) VALUES (?,?,?)', [usuarios.nome_usuario, usuarios.senha, usuarios.tipo_usuario])
    });
    res.json({
        "statusCode":200
    })
}

export  async function updateUser(req, res){
    let Turma = req.body;
    openDb().then(db=>{
        db.run('UPDATE usuarios SET nome_usuario=? senha=? tipo_usuario=? WHERE id=?', [usuarios.nome_turma, usuarios.ano_letivo, usuarios.periodo, usuarios.id])
    });
    res.json({
        "statusCode":200
    })
}

export  async function deleteUserbyId(req, res){
    let id = req.body.id;
     openDb().then(db=>{
         db.get('DELETE FROM usuarios WHERE id=?', [id])
        .then(user=>  res.json(user));
    }); 
    res.json({
        "statusCode":200
    }) 
}




///////////////////////////////////////////////////salas ABAIXOOOO V V V V V V



export async function createTableClass(){
    openDb().then(db=>{
        db.exec(`CREATE TABLE
        IF NOT EXISTS salas (
            id INTEGER PRIMARY KEY,
            numero_sala INT NOT NULL,
            capacidade INT,
            tipo_sala TEXT CHECK(tipo_sala IN ('sala_de_aula', 'laboratorio', 'biblioteca', 'auditorio' )
            ) NOT NULL,
            andar_sala INT NOT NULL
        )`)
    });
}

export  async function selectClass(req, res){
    openDb().then(db=>{
         db.all('SELECT * FROM salas')
        .then(classes_=>  res.json(classes_))
    });
}
export  async function selectClassbyId(req, res){
    let id = req.body.id;
   openDb().then(db=>{
        db.get('SELECT * FROM salas WHERE id=?', [id])
        .then(classes=>  res.json(classes));
    });  
}

export  async function insertClass(req, res){
    let Turma = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO salas (numero_sala, capacidade, tipo_sala, andar_sala) VALUES (?,?,?,?)', [salas.numero_sala, salas.capacidade, salas.tipo_sala, salas.andar_sala])
    });
    res.json({
        "statusCode":200
    })
}

export  async function updateClass(req, res){
    let Turma = req.body;
    openDb().then(db=>{
        db.run('UPDATE salas SET numero_sala=? capacidade=? tipo_sala=? andar_sala=? WHERE id=?', [salas.numero_sala, salas.capacidade, salas.tipo_sala, salas.andar_sala, salas.id])
    });
    res.json({
        "statusCode":200
    })
}

export  async function deleteClassbyId(req, res){
    let id = req.body.id;
     openDb().then(db=>{
         db.get('DELETE FROM salas WHERE id=?', [id])
        .then(classes=>  res.json(classes));
    }); 
    res.json({
        "statusCode":200
    }) 
}



///////////////////////////////////////////////////turmas ABAIXOOOO V V V V V V 



export async function createTableTurma(){
    openDb().then(db=>{
        db.exec(`CREATE TABLE
        IF NOT EXISTS turmas (
            id INTEGER PRIMARY KEY,
            nome_turma VARCHAR (12) NOT NULL,
            periodo TEXT CHECK(periodo IN ('matutino','vespertino','noturno')
            ) NOT NULL,
            sala_id INT,
            FOREIGN KEY (sala_id) REFERENCES salas(id) )')
        )`)
    });
}

export  async function selectTurma(req, res){
    openDb().then(db=>{
         db.all('SELECT * FROM turmas')
        .then(rooms=>  res.json(rooms))
    });
}
export  async function selectTurmabyId(req, res){
    let id = req.body.id;
   openDb().then(db=>{
        db.get('SELECT * FROM turmas WHERE id=?', [id])
        .then(room=>  res.json(room)  );
    });  
}

export  async function insertTurma(req, res){
    let Turma = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO turmas (nome_turma, ano_letivo, periodo, sala_id ) VALUES (?,?,?,?)', [turmas.nome_turma, turmas.ano_letivo, turmas.periodo, turmas.sala_id])
    });
    res.json({
        "statusCode":200
    })
}

export  async function updateTurma(req, res){
    let Turma = req.body;
    openDb().then(db=>{
        db.run('UPDATE turmas SET nome_turma=? ano_letivo=? periodo=? sala_id=? WHERE id=?', [turmas.nome_turma, turmas.ano_letivo, turmas.periodo, turmas.sala_id, turmas.id])
    });
    res.json({
        "statusCode":200
    })
}

export  async function deleteTurmabyId(req, res){
    let id = req.body.id;
     openDb().then(db=>{
         db.get('DELETE FROM turmas WHERE id=?', [id])
        .then(room=>  res.json(room));
    }); 
    res.json({
        "statusCode":200
    }) 
}



///////////////////////////////////////////////////ALUNO ABAIXOOOO V V V V V V 



export  async function createTableStudents(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS alunos ( id INTEGER PRIMARY KEY, rm INT (5), nome VARCHAR (48) NOT NULL, turma_id INT NOT NULL, rg VARCHAR(9) NOT NULL, cpf VARCHAR(11) NOT NULL, telefone VARCHAR(16), endereco VARCHAR(128), email VARCHAR (100) NOT NULL, status BIT NOT NULL, usuario_id INT, FOREIGN KEY (turma_id) REFERENCES turmas(id), FOREIGN KEY (usuario_id) REFERENCES usuarios(id) )')
    });
}

export  async function selectStudent(req, res){
    openDb().then(db=>{
         db.all('SELECT * FROM alunos')
        .then(students=>  res.json(students))
    });
}
export  async function selectStudentbyId(req, res){
    let id = req.body.id;
   openDb().then(db=>{
        db.get('SELECT * FROM alunos WHERE id=?', [id])
        .then(student=>  res.json(student)  );
    });  
}

export  async function insertStudent(req, res){
    let Turma = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO alunos (rm, nome, turma_id, rg, cpf, telefone, endereco, email, status, usuario_id) VALUES (?,?,?,?,?,?,?,?,?,?)', [alunos.rm, alunos.nome, alunos.turma_id, alunos.rg, alunos.cpf, alunos.telefone, alunos.endereco, alunos.email, alunos.status, alunos.usuario_id])
    });
    res.json({
        "statusCode":200
    })
}

export  async function updateStudent(req, res){
    let Turma = req.body;
    openDb().then(db=>{
        db.run('UPDATE alunos SET rm=? nome=? turma_id=? rg=? cpf=? telefone=? endereco=? email=? status=? usuario_id=? WHERE id=?', [alunos.rm, alunos.nome, alunos.turma_id, alunos.rg, alunos.cpf, alunos.telefone, alunos.endereco, alunos.email, alunos.status, alunos.usuario_id, alunos.id])
    });
    res.json({
        "statusCode":200
    })
}

export  async function deleteStudentbyId(req, res){
    let id = req.body.id;
     openDb().then(db=>{
         db.get('DELETE FROM alunos WHERE id=?', [id])
        .then(student=>  res.json(student));
    }); 
    res.json({
        "statusCode":200
    }) 
}



///////////////////////////////////////////////////REGISTRO ABAIXOOOO V V V V V V 



export async function createTableRegistro(){
    openDb().then(db=>{
        db.exec(`CREATE TABLE
        IF NOT EXISTS registros (
            id INTEGER PRIMARY KEY,
            aluno_id INT,
            horario DATETIME,
            entrada_saida, TEXT CHECK(entrada_saida IN ('entrada', 'saida')
            ) NOT NULL,
            status, TEXT CHECK(status IN ('autorizado', 'negado')
            ) NOT NULL,
            justificativa TEXT,
            FOREIGN KEY (aluno_id) REFERENCES alunos(id) )')
        )`)
    });
}

export  async function selectRegister(req, res){
    openDb().then(db=>{
         db.all('SELECT * FROM registros')
        .then(registers=>  res.json(registers))
    });
}
export  async function selectRegisterbyId(req, res){
    let id = req.body.id;
   openDb().then(db=>{
        db.get('SELECT * FROM registros WHERE id=?', [id])
        .then(register=>  res.json(register)  );
    });  
}

export  async function insertRegister(req, res){
    let Turma = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO registros (aluno_id, horario, entrada_saida, status, justificativa) VALUES (?,?,?,?,?)', [registros.aluno_id, registros.horario, registros.entrada_saida, registros.status, registros.justificativa])
    });
    res.json({
        "statusCode":200
    })
}

export  async function updateRegister(req, res){
    let Turma = req.body;
    openDb().then(db=>{
        db.run('UPDATE registros SET data_Hora=? entrada_Saida=? justificativa=? aluno_id=? WHERE id=?', [registros.aluno_id, registros.horario, registros.entrada_saida, registros.status, registros.justificativa, registros.id ])
    });
    res.json({
        "statusCode":200
    })
}

export  async function deleteRegisterbyId(req, res){
    let id = req.body.id;
     openDb().then(db=>{
         db.get('DELETE FROM registros WHERE id=?', [id])
        .then(register=>  res.json(register));
    }); 
    res.json({
        "statusCode":200
    }) 
}

