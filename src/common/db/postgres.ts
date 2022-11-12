import {Client, ClientBase} from "pg";

import config from 'src/config';


export class Postgres{

    #client: ClientBase;

    private static instace;

    private constructor(client: Client){
        this.#client = client;
    }

    static getInstance()
    {
        if(!Postgres.instace)
        {
            const client = new Client({
                user: config.db.username,
                host: config.db.host,
                database: config.db.database,
                password: config.db.password,
                port: config.db.port,
            });
            client.connect();
            Postgres.instace = new Postgres(client);
        }
        return Postgres.instace;
    }

    get client()
    {
        return this.#client;
    }
}