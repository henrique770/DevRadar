# DevRadar

<p align="center"> 
<img width=350 src="https://raw.githubusercontent.com/henrique770/DevRadar/master/web/src/assets/devradar_logo.png">
</p>

[![DevRadar](https://i.ibb.co/dcZyWws/https-i-ytimg-com-vi-ANvlxd2-HYts-maxresdefault.jpg)](https://www.youtube.com/watch?v=ANvlxd2HYts&feature=youtu.be "DevRadar")

## API installation and execution

Clone this repository;

Enter the folder running `cd backend`;

run `yarn` or `npm install` to install the dependencies;

Create a connection in `mongodb` and paste your connection string on `index.js` file;

#### `Example`

```
mongoose.connect(
  'mongodb+srv://username:yourpassword@cluster0-u3b1b.mongodb.net/databasename?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
```

8. run `yarn dev` to start the server.

## Front end web execution

Enter the folder running `cd web`;

run `yarn` or `npm install` to install the dependencies;

now you should run `yarn start` or `npm start`

## Front end mobile execution

You need install expo in your machine 

run `yarn global add expo-cli` or `npm install expo-cli --global`

#### obs ( when use yarn installation ):
To use the installed packages, the install location has to be added to the PATH environment variable of your shell. For bash for example, you can add this line at the end of your .bashrc:
```
export PATH="$(yarn global bin):$PATH"
```

Enter the folder running `cd mobile`;

run `yarn` or `npm install` to install the dependencies;

now you should run `yarn start` or `npm start`
