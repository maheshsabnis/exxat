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

#=================================================================
#Angular Directives
1. Objects that provides Custom UI and Functionality Behavior in Angular Application
2. Three Types of Directives
   1. Component Directive
   2. Structural Directives
      1. Used to dynamically add and remove HTML DOM
         1. *ngIf
         2. *ngFor
         3. *ngSwitch--ngSwitchCase
   3. Attribute Directives
      1. ngModel
      2. ngClass
#=================================================================
# Angular Forms
1. Reactive Forms
   1. The ReactiveFormsModule, contains Object Model for Forms
   2. A Single Form Object that has a Form State.
   3. The State is managed using FormGroup class
      1. FormGroup Contains the Custom-Property-Directive as [formGroup], this represents the State of whole form
   4. The state of individual element is represented by using FormControls class.
      1. One FormGroup have multiple FormControls
      2. Each FormContol is bind with Propety of Model object e.g. Student Model Object
      3. The Model object from FormControl is bind with Editable UI element using [formControlName] custom-property-directive
      4. Very Important: If using [formControlName] for Data binding, then do not use ngModel
2. In Reactive Forms
   1. <form> tag is by default maped with ngForm
   2. the onSubmit is maped with (ngSubmit)
   3. formGroup.value, property is the state of all FormControls in the Forms
3. Template-Driven form aka utility forms e.g. LoginForm
   1. To read the value from each form element we use # identifier
      1. e.g. <input type="text" #studentid>
         1. studentid.value, provide value of Input element
4. Validations
   1. HTML 5 validations aka traditional validations
      1. Validation Rules are applied using DOM Attributes
         1. required
         2. pattern
         3. minlength
         4. maxlength
   2. Model Validations in Reactive Forms, new in Angular
      1. Validations rules are applied using Validators object from @angular/forms
      2. Validators class contains static methods for validations
         1. required(AbstractControl)
            1. AbstractControl represents the DOM element to be validated
         2. requiredTrue(AbstractControl)
            1. Value must be true
         3. minLength(length as number)  and maxLength(length as number)
         4. min() / max()
         5. pattern(RegEx)
         6. compose([An Array of Validation rules])
   3. To display validation rules on UI use following
      1. <FormGroup>.controls.<FormControlName>.dirty
         1. The UI element is changed
      2. !<FormGroup>.controls.<FormControlName>.valid
         1. The UI element failed validation rules aftre it is changed (dirty)
      3. <FormGroup>.controls.<FormControlName>.<validation-rule>
      4. To evaluate the validation rule for errors
         1. <FormGroup>.controls.<FormControlName>.errors.<validation-rule> 

#=================================================================================================================================================
# Angular Parent Child Communication aka Inter-Component Communication

1. Child Component must declare public read/write property decorated with @Input decorator
2. This will make sure that the property can be used for property-binding
3. In child component write logic to process received data using @Input 
4. The child component can notify back to parent using EventListener object. This has an 'emit()' method to emit an event. 
5. EventEmitter<T> is generic class. Here T is known as payload aka event data. The EventEmitter event type must be decorated by @Output. The EventEmitter event can be used as EventBinding in the selector of Child Component.
6. When child emit an event, the parent must subscribe to it using Event-Binding. The payload is received using standard $event object.

#=============================================================================================

# Angular Services
1. class decorated with @Injectable() decorator from @angular/core
2. It has 'providedInd' property with following values
   1. Type
      1. It will be provided only for specific
         1. component
         2. or other objects in current module
   2. 'root' (Recommended)
      1. It will be registered globally for the application and will be available for all objects (Components/Services/Directives/Pipes) in current application
   3. null (Default)
      1. Explicitely registered in 'providers:[]' array on ngModule
3. Additional Uses of having Services
   1. Managing External Http / Socket calls from Angular Application
   2. To Communicate across components based on Puiblish and Subscribe Mechanism    
      1. Service must define an EventEmitter object with payload
         1. Payload will be the values that will be shared across components
      2. Service must define public method having input parameter of the type payload. This method must emite the event and broadcast (or publish) payload value.
      3. The sender component must be injected with this service and must call the public method and pass the payload value
      4. The receiver component must be injected with this service and must 'subscribe' to the event from the service in ngOnInit() method. 
      5. When the event is emitted, over the subscription the receiver component will receive the value
4. 








