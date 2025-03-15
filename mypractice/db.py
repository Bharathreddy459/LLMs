import pyodbc
import pandas
import sqlalchemy as sa


drivername = "{ODBC Driver 17 for SQL Server}"
connection_string = ("Driver={ODBC Driver 17 for SQL Server};"
                     "Server=LAPTOP-S7Q4HFN4\\SQLEXPRESS;"
                     "Database=Mydb;"
                     "Trusted_Connection=yes;"
                     )

#connection = pyodbc.connect(connection_string)

from sqlalchemy.engine import URL

connection_url = URL.create("mssql+pyodbc", query={"odbc_connect": connection_string})

from sqlalchemy import create_engine
engine = create_engine(connection_url)


with engine.begin() as conn:

    #result = conn.execute(sa.text("Insert into employee values (106,'Max',55000)"))
    result = conn.execute(sa.text("Update employee set Emp_id = 107, Emp_name = 'Jonathan',Emp_Sal = 60000 where pkid = 11"))
    ds = pandas.read_sql_query(sa.text("SELECT * from employee"), conn)
    print(ds)