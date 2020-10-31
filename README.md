# Event Poster Maker

Event Poster Maker is web app created to facilitate rapid creation of DSC event posters while leveraging reuse of community contributed templates.


![Showcase](showcase.gif)

Below are steps required to run the app on your local development evironment.

## Prerequisites
You will need the following installed on your system.

1. [git](https://git-scm.com/)
2. [node](https://nodejs.org/en/)
3. [Angular CLI](https://github.com/angular/angular-cli)

## Next
1. Open your terminal or command prompt and cd to the location you'll be cloning the project in
    ```
    cd ~/
    ```
2. Clone the project

    ```
    git clone https://github.com/DSCKenyattaUniversity/event-poster-maker.git
    ``` 

3. Change directory to the cloned project
    ```
    cd event-poster-maker
    ```
4. Install all the projects dependencies
    ```
    npm install
    ```

5. Run local development server
    ```
    npm run start
    ```
    This starts a development server on port 4200, so you can launch your browser and navigate to `http://localhost:4200/`

    Alternatively, run `npm run build` to build the project. This should compile the project to a folder `dist/event-poster-maker`. Copy the contents of the folder to your local webserver's docroot.

## Creating new poster templates
To create new poster templates, execute the command below on your terminal at the root of the project. It will prompt you for some information ie. the orientation.
```
npm run create-poster-template
```

If you did run `npm run start`, go to your browser and should see a blank template added in the templates list. Go to the directory where the above script created for your template and make modifications to the `poster.svg` file. You can do this by hand or using a Vector Graphics Software like [Inkscape](https://inkscape.org/) or [Adobe Illustrator](https://www.adobe.com/products/illustrator.html).

## Licensing
Event Poster Maker is licensed under MIT License. See [LICENSE](LICENSE) for the full license text.

## Contributing
Contributions are welcomed via Pull Requests especially contributions for poster templates, documentation and tests.
