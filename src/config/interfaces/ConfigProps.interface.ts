
export interface IDatabaseProps {
    dbHost    : string;
    dbPort    : string;
    dbUser    : string;
    dbPassword: string;
    dbName    : string;
}

export interface IConfigEnviromentProps {
    synchronizeDatabaseStatus: boolean;    
    migrationRunStatus       : boolean;    
    entityPath               : string;
    migrationPath            : string;
}
