#all React Source Code

# parcel is 

  -for more detail go throw parcel website 
    - dev build 
    - local server
    - HMR  = hot module replacement
    - file Watching algorithm - Written in c++
    - caching - faster builds
    - image optimization 
    - bundling
    - compressing
    - consistance hashing
    - code spliting for you 
    - differencial bundeling - support older browser
    - dignostic  // give error beatifully
    - good error handling 
    - tree shaking      // remove unused code for u

    My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
Two type to export files
    Default Export/Import
        -export default Component;
        -for single file
        -do not use { fileName}
        -import component from "path";
    Name Export/Import
        -export const Component
        -for multiple things from single file
        -use { fileName } to import things
        -import {component} from "path


    Hooked
        -Normal JS utility functions
    Two Important Hooks:-
        -useState() - Superpowerful state variables
        -useEffect()

    useState():
            -To use in file, import from react. Write variable inside component.
        whenever state variable react will re-render component

    Event-Handler
        -pass attribute on button for e.g. onClick={() => {console.log('test');}}

    State Variable - super powerful variable

    Virtual DOM(V-DOM)
        -It is representation of actual DOM

    Reconciliation Algorithm/ React Fibre
            -react-fibre new way of finding diff and updating dom
        acdlite/react-fibre-architecture

    Diff Algorithm
        -Find the difference between old V-DOM and new V-DOM
