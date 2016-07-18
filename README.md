# gulp-rev-example
Testing multiple gulp-rev libs.

## Application
You can use the application in development purpose with: 

``` sh
$ gulp serve:dev
```

You can generate the new version of the application with:

``` sh
$ gulp build:dist
```

You can test the output with:

``` sh
$ gulp serve:dist
```

## Rev(s)
### gulp-rev-all

Added the documentation example task of [gulp-rev-all]. And test it. Results:
- Good Output.
- Index with hash (Not good)
- App doesn't work.

You can test it:

``` sh
$ gulp build:dist
$ gulp rev:all
$ gulp serve:all
```


[gulp-rev-all]: <https://github.com/smysnk/gulp-rev-all>
