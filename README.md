Calculator
========= 
![alt text](https://github.com/hydeiablakey/CalculatorApp/blob/master/img/calculator_demo.png)



This app is one I've created using React. The App expects two strings, a _PrevNum_ (Previous Number) and a _CurrentNum_ (Current Number) and a _CurrentOperation_ (operand) to be selected. Once you click a number, which has it's own associated function for numbers, the number moves to Current Number. Once you hit a operand key, the selection then moves to it's associated function while the Current Number turns into an empty string and the Previous Number now holds the Current Number. Once you click on your second number, you can decide to keep adding more numbers to your current operation or hit the equals sign. If you decide to keep adding numbers, the variable _operartorCount_ counts if the amount of operand's you've clicked are greater than 1, if they are then the evaluate function executes and the state changes accordingly. Once you are ready to click the equal button, your result is shown in the display as an integer, if you decide from there to perform more operations to the result, it changes back to a string. Display keeps track of each current number being entered into the calculator as well as the resulting number after hitting the equal button. 

**Note:**

Clicking one number, an operand and then the equals sign will result in a NAN result. 

Getting Started
-------
To get started with this app, you can start by cloning `Calculator App`. 

After cloning, cd into the associated Calculator App folder:

```
cd calculator
```

Install the Dependencies:

```
npm install or npm i
```

Begin Running the Application:
```
npm run dev 
```

Afterwards you should be ready to start using and running the Calcuator App here: [localhost:8080/](http://localhost:8080/)

Dependencies 
-----
```
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "webpack": "^3.10.0",
    "webpack-cli": "^2.0.9",
    "webpack-dev-server": "^3.0.0"

```

