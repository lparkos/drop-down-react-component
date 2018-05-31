# React Reusable Dropdown

A simple reusable dropdown component

### Dependencies

* Babel/ES6
* React
* node
* npm/yarn

### Usage

* Use this component by passing in props.

```
<Dropdown
  primary="This is your Title"
  listitem={this.state. <Your Object>}
/>

```
* The 'listitem' prop takes in an object array, and will display an 'li' per element in the array using the map function.

#### Example of Object

```
favoritelinks: [
      {
        id: 'petfinder.com',
      },
      {
        id: 'medium.com',
      },
      {
        id: 'github.com',
      },
    ]
  ```
