FlickrTweet
-----

This is a simple app that searches the public Twitter and Flickr streams
for keywords and displays the first results it finds. It's an experiment for
me to learn how to do AngularJS development.

Sharing this code to get ideas.

This uses CoffeeScript and Sass, and doesn't have tests yet. I will rewrite
this TDD-style shortly.  Consider it an experiment, not something you should
copy or emulate.

Building
------

I used `qedproject` to generate this project, so it uses Guard to watch for 
changes to the files and put things in the right folders. 

If you already have Ruby 1.9.x installed just clone this and run

~~~
$ bundle install
$ bundle exec guard
~~~

That'll get everything you need.

Use

~~~
qedproject --server
~~~

to run the http server on port 1337.

License
======

MIT license.


