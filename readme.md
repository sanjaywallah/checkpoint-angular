# Checkpoint: AngularJS

For this checkpoint we will be building a little app to keep track of random thoughts. The app will be called **Musings** and will have one model, a **musing**.

- Create a module `musingsApp`
- Create a service `musings` containing an array of hardcoded data
  - The elements of the array should be objects with properties `title`, `content`, and `author`
  - Give the service a method `all` that returns all of the data in the service
  - Give the service a method `create` that takes an object and adds it to the end of the array
  - Give the service a method `delete` that takes an index and deletes the musing at that index of the array
- Create a controller `MusingsController` and inject the `musings` service
  - Add a property `musings` to the controller that holds the return of `musings.all()`
  - Add a property `newMusing` to the controller is an object with properties `title`, `content`, and `author` (define this on the controller explicitly rather than declaring it by way of ng-model directive)
  - Add a method `createMusing` to the controller that calls `musings.create` with the `newMusing` value of the controller
  - Add a method `deleteMusing` to the controller that takes an index and calls `musings.delete` with that index
