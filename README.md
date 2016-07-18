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
- Index with hash (Not good).
- App doesn't work (Not good).

You can test it:

``` sh
$ gulp build:dist
$ gulp rev:all
$ gulp serve:all
```

### gulp-rev-easy

Added the documentation example task of [gulp-rev-easy]. And test it. Results:
- Index with hashed elements (Good).
- Nothing else generated (Not good).
- Doesn't find files (Not good). 

You can test it:

``` sh
$ gulp build:dist
$ gulp rev:easy
$ gulp serve:easy 
```

[gulp-rev-all]: <https://github.com/smysnk/gulp-rev-all>
[gulp-rev-easy]: <https://github.com/timtian/gulp-rev-easy>
