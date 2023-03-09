# Data-Kids-Table

## Info
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run
- `npm start`

## Instruction

Please, develop an application which creates a hierarchy table from variable input data in JSON format and allows basic
user interaction.
In the attachment, you can see an example of such data in JSON and an example screenshot of the hierarchy table
component. Do not try to hardcode the app to fit the sample data, it has to work with any supplied data respecting the
data schema described below.
Every array item in the JSON file consists of its own data and kids properties. The data object represents table columns and can have a variable number of key-value pairs but you can expect that all rows in a single table will use the same keyset.
The kids object represents nested tables and can also have a variable number of keys where key is the title of the nested table and value is an object with a single records property under which you will find the recursive data.
To illustrate such schema, similar TypeScript interface might be used:

```
interface TableRow {
  data: Record<string, string>;
  kids: Record<string, { Records: TableRow[] };
};
```

Use the attached data.json and create the hierarchy table application (similar to the screenshot). Implement data and view layers, which are clearly separated. For each row, provide a remove button, which deletes an item in the data and view layer in your application. If an item has child items, they have to be deleted as well. When you click on an item, direct child items are hidden/shown.
The only tech stack requirement that we have is to use React or Vue. The choice of state management library, UI styling
solution and everything else is up to you.
