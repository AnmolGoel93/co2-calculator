# co2-calculator
CO2 Emission Calculator : This program returns the amount of CO2-equivalent that will be caused when traveling a given 'distance' using a given 'transportation method' in a certain unit.

To Run this Project, download the code and go to the source folder and run 'npm install' or 'npm i'. It will install all the dependencies.

To run the test scripts, use the command 'npm run test'.

To execute the code and get the desired result: run the command : npm run start -- <command line arguments>

Valid Command Line Arguments and its values : 

1. transportation-method (mandatory)
   Expected values : small-diesel-car,
                     small-petrol-car,
                     small-plugin-hybrid-car,
                     small-electric-car,
                     medium-diesel-car,
                     medium-petrol-car,
                     medium-plugin-hybrid-car,
                     medium-electric-car,
                     large-diesel-car,
                     large-petrol-car,
                     large-plugin-hybrid-car,
                     large-electric-car,
                     bus,
                     train

2. distance (mandatory)
   Expected values : any valid number

3. unit-of-distance (mandatory)
   Expected values : km, m, meter, kilometer

4. output 
   Expected values : kg, g, kilogram, gram
   

Examples : 
npm run start -- --transportation-method medium-diesel-car --distance 15 --unit-of-distance km

npm run start -- --transportation-method train --distance 14500 --unit-of-distance m --output kg
