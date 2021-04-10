Component -> Template (HTML) -> Repesent UI
 

     Angular Material - is a UI Component Library

     - Modern Rich Controls
     - Consistent Look and feel 
     - Themes
     - Portable
     - Device Independence       

     - Example: Fancy Buttons,  Menu Bars, Tabs, Navigations Bars, Progress Bard 


     ng add @angular/material

  Component - event binding - (click)

  Custom Directives
 ===============================================

    ElementRef - plain native HTML element
   
    usage - Capture events in directive classes 
   <h1 appHighlight color='red'></h1>
   <h1 align="left"></h1>

 ===================================================================

          Component Communication

              1. Parent - Child Communication

                   Parent Component  -------------------------------------------> Child Component   ----> View (UI)
                          |                       Share the data  [property binding]
                         |
                  Service                            <----------------------------------------------
                      |                              Emits the event (event binding)
                      |
                  HttpClient Service - to fetch from backend application
              
    Usage:
    * Parent may just act as a source of data    and pass to the child to prrsent the data as view   
    * form --> complex form ->  elements country  <----->   elements state 
    * Feeback --------> table  (traiing id --- description --- feedback(5) ------> child component (*****)
      -----------------------------------------------------

        
      2.  Quering  the template - @ViewChild
             app-parent.html
                   <div>
                    <h1>
                  </div>
                 <app-child visit-id="1"> <app-child>
   
             class ParentComponent
           {

            after Child Component is initialized in the view

        }

    
   3. Using Services
        Services component with logic
        Services are injected by Angular Framework into the components
       Angular frameworks has an inbuilt services named injector service


    To restrict type of data - create a Model (Interface for types)


   app
        - customer
                  - customer-details


  app
     - customer
     - customer-details
