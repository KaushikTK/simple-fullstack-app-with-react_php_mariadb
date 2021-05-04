This is a simple full stack application for beginners to understand the code flow from frontend to backend. MariaDB is used in this application as the database.

To run this application, do the following:
1. Install WAMP server and make sure it is running.
2. Create a folder inside the www folder present inside the wamp folder with some name say server and copy paste the files present inside the server_side_code folder.
3. Set up a database in WAMP and create a table where you want to store the data. A sample sql file is shared in "server_side_code/mariadb/simple_crud.sql". You can import this file as well instead of creating a new table.
4. Do `npm install` followed by `npm start` to start the react development server and head on to localhost:3000/.

* Please replace the database username, password and table name in the files present in the server. 
* In the frontend make sure to change the folder name with the name of the folder that you have created inside www folder while making an ajax call to the server in Add.jsx, View.jsx and ViewAll.jsx files.