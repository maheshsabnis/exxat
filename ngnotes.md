# Angular Programming
1. Core Packages
    - "@angular/animations": "~8.0.0",
        - Animations
    - "@angular/common": "~8.0.0",
        - a Common Module Loader. This is used by Angular to load standard Modules in current application 
    - "@angular/compiler": "~8.0.0",
        - Provides 'Ahead-of-Time' aka (AoT) compiler
            - Compress the output production Build
    - "@angular/core": "~8.0.0",
        - Define Object Model for most popular Angular objects
            - NgModule
                - Angular Objects' Container
            - Component
                - Defines UI, Properties and Methods
            - Injectable
                - Used to Define Angulaqr Service
            - Input
                - Used to define property in Child Component to Accept data
                - Conept of Parent-Child Component's Communication
            - Output
                - Used to Define an event that will be emitted from Child to parent component    
            - OnInit
                - LifeCycle Management Interface. This implemented by Component
            - Directive
                - Used to Define Angular Custom Directives
            - Pipe
                - Used to Define Custom Pipes for Custom Transaformation on UI
            - HostListener
                - Used to define method that will be invoked when an Event is raised
            - EventEmitter
                - Used to define event to be emitted            
    - "@angular/forms": "~8.0.0",   
        - The Angular Forms 
        - FormsModule
            - Used for Two-Way Data Binding
        - ReactiveFormsModule
            - Model-Driven Reactive Forms aka Model Validated Forms
    - "@angular/platform-browser": "~8.0.0",
        - Provides Object Model for Browser Resources during execution of application
        - BrowserModule
            - Manage the Browser and loading of Angular resources

    - "@angular/platform-browser-dynamic":
     "~8.0.0",  
        - Provides the 'platformBrowserDynamic()' object to load or Bootstrap the Angular Application
    - "@angular/router": "~8.0.0",
        - Routing for SPA
            - RouterModule
                - Platform for Routing
            - Routes
                - Router Table
            - Route 
                - A Route Expression in Route Table
            - Router
                - Class to manage Routing
            - ActivatedRoutes
                - Parameterized Routing

#==================================================================
What is the ES 6 Decorator?
- They are the custom object applied on following types to define its behavior
    - Class
    - Method
    - Member 
#=================================================================
Angular Standard Decorator Objects
1. NgModule
    - Applied on class ti make it as Angular Module.
    - Its has following properties
    - imports: Of the type array, used to import all standard angular modules and custom modules for the current Angular Module      
    - declarations: Of the type array, used to declare following for current application
        - Components
        - Pipes
        - Directives
        - The declarations property, defines a reference of all objects in current application in AppModule's object pool. 
    - providers: Of the type array, used to define registrations of all Angular services in current application
        - The is the D.I. Container for the current application
    - exports: Of the type array, used to export contents of current application module to other Angular application, so that they can import it.
    - bootstrap: Of the type array, used to load components when app is loaded in the browser. 
2. @Component
    - Applied on class to make it as Angular Component
        - Properties    
            - selector: The custom HTML Tag, that will be used to load HTML of Component when app is loaded.
            - template: For inline HTML Template
            - templateUrl: External HTML File
            - style and styleUrls: inline and External Styles

#=================================================================# Angular build
1. main.js
    - Application's Source code transpiled in JS
2. polyfills.js
    - Compilation of Angular's external dependencies for Browser
        - zone.js file used to manage runtime errors in browser
        - rxjs.js file used to provoide an 'Observable' for Angular applications
3. vendor.js
    - JavaScript transpilation of all Standard Angular Modules
4. styles.js
    - JavaScript Object Model for all CSS/SCSS files provided to Angular application
5. runtime.js
    - Manage an executio of Angular App in Browser.

The ng serve --prod command will be used to optimize the build.
#=================================================================          
# Angular Binding
1. Interpolation aka Expression Binding
- Bind the Component's public member with One-way Read-only binding with UI Element
- syntax
- {{MODEL-PROPERTY}}

2. Property-Binding
- Binding public member of component with UI element
- Syntax
    - [<ATTRIBUTE-OF-DOM-ELEMENT>]="<PROPERTY-FROM-COMPONENT-CLASS>"
    - e.g. 
       - <input [value]="<Property>">
       - [value], [href], [checked], [disabled], etc.
       - This is always from Compone to UI
3. Event-Binding
    - Binds an event of the Html DOM element with the method from component class
    - syntax
         - (<EVENT-NAME>)="method()"
         - <input type="button" (click)="display()">
4. Two-Way Binding
   - From Component to UI and Back to Component
   - Combination of Property + EVent Binding together
   - implemented using the 'ngModel' object that is managed by 'FormsModule' from @angular/forms
   - Syntax 
       - [(ngModel)]="<PROPERTY-FROM-COMPONENT>"       




 






