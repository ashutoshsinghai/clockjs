# clockjs
A graphical clock using CSS and Vanilla Javascript
Can be included in any existing project

### directions to use

1. include the script in the html file using the following url inside the head tag 
  https://as12.ml/clockjs/clock.js
  
    `<script type="text/javascript" src="https://as12.ml/clockjs/clock.js"></script>`
2. include the css link

    `<link rel="stylesheet" type="text/css" href="https://as12.ml/clockjs/clock.css">`
2. Make a division inside body tag and give it any id<br>
    eg. id="myclock"<br>
    ```
    <div style="height:500px;width:500px" id="myclock"></div>
    ```
    
    `this height and width can be any depending upon the container inside which your'e using it`

    `<link rel="stylesheet" type="text/css" href="https://as12.ml/clockjs/clock.css">`
3. create the script tag right before closing `</body>` tag

    ```
    <script>
      let clock = new Clock({target:"#myclock"})
      /* any identifier can be used in place of id , in case you give identifier as class kindly use
      {target:".myclock"}*/
    </script>
    ```
 4. Your setup for the clock is ready
 5. You can use the following functions to give your clock custom styline and scaling
    ### scale(number)
    > Allowed values - int,float<br>
      eg. clock.scale(2)
    ### shape(string)
    > Allowed values - "circle", "square", "rounded"<br>
      eg. clock.shape("square")
    ### setOuterBack(string)
    > Allowed values - any color or hex code string <br>
      eg. clock.setOuterBackground("blue")
          clock.setOuterBackground("#ffffff")//white
    ### style(number)
    > Allowed values - 0,1<br>
      eg. clock.style(1)
    ### options(object)
    > Allowed values - all the javascript style properties and vlues to change css<br>
      eg. 
      ```
      clock.options({
        fontFamily:"Arial",
        border:'5px solid brown',
        borderRadius:"5% 30% 30% 5%",
        background:'linear-gradient(#fff,orangered)'
      })
      ```
      
      ### second(object)
      `to change the properties of the seconds hook`
    > Allowed values - all the javascript style properties and vlues to change css<br>
      eg. 
      ```
      clock.second({
        borderRadius:"5% 30% 30% 5%",
        background:'linear-gradient(#fff,orangered)'
      })
      ```
