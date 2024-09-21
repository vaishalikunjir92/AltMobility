import psycopg2

# Database connection parameters
hostname = 'localhost'  # or your database host
database = 'AltMobility'
username = 'postgres'
password = '12345678'
port = '5432'  # default PostgreSQL port

try:
    # Establish a connection to the database
    connection = psycopg2.connect(
        host=hostname,
        database=database,
        user=username,
        password=password,
        port=port
    )
    
    print("Connection successful")

except Exception as error:
    print(f"Error connecting to the database: {error}")

try:
    # Create a cursor object
    cursor = connection.cursor()

    # Execute a query
    cursor.execute("SELECT * FROM alerts;")
    
    # Fetch results
    records = cursor.fetchall()
    for record in records:
        print(record)
        print("==========================================")

except Exception as error:
    print(f"Error executing query: {error}")

finally:
    if cursor:
        cursor.close()

