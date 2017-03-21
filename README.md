## 0x00 Use a Javascript Array to Construct a Maybe
Much of our code in real life is full of if statements that check the validity of a given input to see if a given computation should be performed. Using the ever popular Maybe construction allows us capture this disjunction in one place, keeping our functions free of similar if statements that can pollute the intention of the function. You do not even need a fancy library to get this benefit, as Javascript ships with everything you need with it's build in Array.

The lesson on egghead can be found [here][5]

### Requirements
This code example runs on a POSIX based system (Linux, OSX, etc) in a [nodejs][2] environment requiring a version greater than `4.2.x` to be run. If you *have* to work in another environment, this lesson also has a "plunk" hosted on [Plunker][3] that can be run in browser and can be found here:

[Lesson Plunk][4]

### Using This Example
This code example and environment is provided on its own branch. To run this locally, just clone this repository down, check out this branch and run the following commands:

#### Setup Your Dependencies
To setup the lesson, execute this command in the project folder:

```
$ npm run setup
```

#### Run The Code
Once all dependencies have been pulled down, you can then run the example code.

This code runs in a node environment and logs to the console that the code was run in. Once started, the environment will listen to changes to the files and re-run the code. This allows you to have immediate feed back to the changes you made. To exit out of the code example, just press the keystroke `Ctrl+C`.

To run the lesson, execute the following in the project folder:


```
$ npm start
```

[1]: https://egghead.io/instructors/ian-hofmann-hicks
[2]: https://nodejs.org/
[3]: https://plnkr.co/

[4]: https://embed.plnkr.co/Df6WHtQD1XLeqX4b5Kvw/?show=script
[5]: https://egghead.io/lessons/javascript-use-a-javascript-array-to-construct-a-maybe
