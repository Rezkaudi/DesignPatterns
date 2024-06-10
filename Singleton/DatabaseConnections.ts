// // Database Connections Without Singleton

// class DatabaseConnection {
//   constructor() {
//     console.log("connection successfully to database ");
//   }

//   executeQuery(sql: string): void {
//     console.log("successfully execution :     " + sql);
//   }
// }

// // Usage
// const dbConnection1 = new DatabaseConnection();
// dbConnection1.executeQuery("SELECT * FROM users WHERE id = 1");

// // in onother file
// const dbConnection2 = new DatabaseConnection();
// dbConnection2.executeQuery("SELECT * FROM users WHERE id = 2");

// ---------------------------------------------------------------------------------

// Database Connections With Singleton

class DatabaseConnection {
    private static instance: DatabaseConnection | null = null;
  
    private constructor() {
      console.log("connection successfully to database ");
    }
  
    public static getInstance(): DatabaseConnection {
      if (DatabaseConnection.instance === null) {
        DatabaseConnection.instance = new DatabaseConnection();
      }
      return DatabaseConnection.instance;
    }
  
    executeQuery(sql: string): void {
      console.log("successfully execution :     " + sql);
    }
  }
  
  // Usage
  const dbConnection1 = DatabaseConnection.getInstance();
  dbConnection1.executeQuery("SELECT * FROM users WHERE id = 1");
  
  // in onother file
  const dbConnection2 = DatabaseConnection.getInstance();
  dbConnection2.executeQuery("SELECT * FROM users WHERE id = 2");
  