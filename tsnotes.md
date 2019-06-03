# TypeScript
1. Modern Front-End Programming Language
2. Designed and Developed by Microsoft
3. SuperSet of JavaScript aka Typed-JavaScript
#=====================================================================================================
#TypeScript Configuration on Dev. Machine
1. npm init -y
    - Add package.json in current folder that will be used as WorkSpace
2. npm install -g typescript
    - Install TypeScript in Global Scope of the current machine
    - The 'tsc' command, this is called as TypeScript Transpiler
    - Transforms the .ts file (TypeScript file) into .js file (JavaScript file)
    - syntax
        - tsc <File-Name>.ts
            - generate <File-Name>.js
    - To run the output .js file use following command
        - node <File-Name>.js
3. Install TypeScript in local Workspace Scope using following command
    - npm install --save typescript  

#=================================================================# TypeScript features aka ECMA-Script 6 aka ES 6 features
1. Local-Block Scope Variable Declaratrion using 'let' keyword 
    - the {...} block
2. Data Types
    - string, number, boolean, date
    - Array
    - Object
    - Union Types
        - <DataType1>|<DataType2> 
    - Array class   
        - Array methods
            - push() / pop() 
            - iterator methods  
                - array.forEach()
                - array.filter(); 
                    - to filter records from array based on condition
                - array.map();
                    - to read records from array as dictionary
            - utilitie methods
                - sort() / reverse()
3. Iterators aka loops
    - standard for..loop
        - for(let i=initial-value; condition; increatemt|decreament) {...}, provided in ES 3/5/6 onwards
    - Simple syntax to for..loop also known as for..in loop
        - Syntax
            - for(let counter in collection){...}
                - Collection is Array or any other object having multiple values  
                - This is introduced in ES 5 
    - ES 6+ new Iterators using for...of loop
        - Syntax
            - for(let object of collection){...}
4. Template-String
    - An Immutable String object aka Interpolated String, the string that is injected by placeholder variables
    - var res = str1+str2; standard concatination
    - in ES 6 template-string
        - let res = `{str1} {str2}`;
    - Extensively used by Angular for HTML Parsing of Views
5. Arrow-Operators
    - Simpler syntaxt for callback functions
    - Older Syntax for Callback
        - function doWork(callback){....};
            - callbac is function with 2 parameters e.g.
        - call doWork as following syntax
            - doWok(function(x,y){...})
    - In ES 6 new Syntax using Arrow Operators is
        - doWork((x,y) => {......});
            - => is an arrow operator
6. Object Oriented Programming  
    - Class
    - Default Access Specifier for Class members is public
    - Other Access Specifiers are
        - private and protected
    - Inheritence using 'extends' keyword
    - Interface implementation using 'implements' keyword
    - Constructor 
        - Parameterized ctor
            - parameters are scoped to ctor function
        - Public Parameters to ctor
            - parameters are scoped to ctor, within class and out of the class using its instance
        - Private Parameters to ctor    
            - parameters are scoped to ctor, and within the class as private members to class
7. Modules
    - Sharing classes/methods across .ts files
    - Class must be defined as 'export' so that it can be imported using 'import'
        - export class MyClass {...} in file1.ts
        - import {MyClass} from './file1'; in file2.ts  

