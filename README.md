# Coordinates #
Plugin on native js to determine the coordinates of an element in a browser window


## How to ##

1. Download the [coordinates.min.js script](https://bitbucket.org/denis_lipatov/coordinates/src/master/dist/coordinates.min.js) and include **Coordinates** in your webpage.

    ```
    <script src="coordinates.min.js" async=""></script>
    ```
    
2.  Get item coordinates in browser window

    ```
    <script>
    
        // version 1 jQuery
        var elementCoordinates = new Coordinates($('.element-coordinates'));
    
        // --- OR --- //
    
        // version 2 native JS
        var elementCoordinates = new Coordinates('.element-coordinates');
    
        // --- OR --- //
    
        // version 3 native JS
        var elementCoordinates = new Coordinates(document.querySelector('.element-coordinates')); 
    </script>
    ```
    
    There will be an array of data results:
        
    ```
    Object {
        bottom: 344
        element: <div class="element-coordinates">
        height: 300
        left: 400
        right: 1220
        top: 300
        width: 300
    }
    ```