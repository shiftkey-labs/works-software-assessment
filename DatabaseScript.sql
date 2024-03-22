-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS assignment_project_database;

-- Use the database
USE assignment_project_database;

-- Check if the table exists, drop it if it does
DROP TABLE IF EXISTS tbl_notes;

-- Create the table
CREATE TABLE tbl_notes (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    note_text VARCHAR(1000),
    created_at DATETIME NOT NULL,
    updated_at DATETIME,
    PRIMARY KEY (id)
);