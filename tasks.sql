-- Create a database
CREATE DATABASE TaskManager;

-- Use the database
USE TaskManager;

-- Create a table for tasks
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    list_name VARCHAR(50) NOT NULL, -- For categorizing tasks by the list
    task_description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO tasks (list_name, task_description) VALUES 
('Purple List', 'Sample Task 1'),
('Gold List', 'Sample Task 2'),
('Orange List', 'Sample Task 3');
