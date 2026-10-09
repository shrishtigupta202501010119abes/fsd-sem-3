const fs = require('fs');

// CREATE - Create a new file
fs.writeFile('example.txt', 'Hello, this is my file!', (err) => {
    if (err) throw err;
    console.log('File created successfully.');

    // READ - Read the file
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File content:', data);

        // UPDATE - Add more content to the file
        fs.appendFile('example.txt', '\nThis content has been added.', (err) => {
            if (err) throw err;
            console.log('File updated successfully.');

            // READ again to verify update
            fs.readFile('example.txt', 'utf8', (err, data) => {
                if (err) throw err;
                console.log('Updated content:', data);

                // DELETE - Delete the file
                fs.unlink('example.txt', (err) => {
                    if (err) throw err;
                    console.log('File deleted successfully.');
                });
            });
        });
    });
});