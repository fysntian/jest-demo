# Install dependencies
npm i

# Perform test
npm test

# Description
1. When performing a test, an error while thrown from global-setup.ts, and the line number of stack is wrong.
2. Commenting the "throw new Error('bootstrap error');" at bootstrap.ts, then performing the test, an error while thrown from app.test.ts, and the line number of stack is right.
