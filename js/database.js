// ---------- DataBase Part --------------
const mysql = require('mysql2/promise');

// Connect to MySQL
async function connectToMySQL() {
    try {
        const connection = await mysql.createConnection({ 
        host: 'sql6.freesqldatabase.com',
        user: 'sql6698015',
        password: 'd2728QM8Tf',
        database: 'sql6698015'
        });
        console.log('MySQL connected');
        return connection;
    } catch (error) {
        console.error('Error connecting to MySQL:', error);
    }
}

// Insert Data ...
async function insertData(table_name, values) {
    try {
        const connection = await connectToMySQL();
        msg = 'Data inserted successfully'

        if(table_name == 'USERS')
        {
            const [rows, fields] = await connection.execute(
            `INSERT INTO ${table_name} (user_name, user_mail, user_ps) VALUES (?, ?, ?)`,
            values
            );
        }

        else if (table_name == 'GAMES')
        {
            const [rows, fields] = await connection.execute(
            `INSERT INTO ${table_name} (game_ID, game_name) VALUES (?, ?)`,
            values
            );
        }

        else if (table_name == 'USERS_GAMES')
        {
            const [rows, fields] = await connection.execute(
            `INSERT INTO ${table_name} (user_ID, game_ID) VALUES (?, ?)`,
            values
            );
        }

        else
            msg = `Error inserting in table ${table_name}`
        
        console.log(msg);
        connection.end(); // Close the connection
    } catch (error) {
        console.error('Error inserting data:', error);
    }
}

// ---------- Exports --------------
const { data } = require('./main_login.js');
console.log(data); 