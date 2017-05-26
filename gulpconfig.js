// ==== CONFIGURATION ==== //

var path    = require("path");
var webpack = require("webpack");

// Project paths
var project  = 'PROJECT NAME';
var src      = './src/';
var build    = './build/';
var dist     = './dist/' + project + '/';
var bower    = './bower_components/';
var composer = './vendor/';
var modules  = './node_modules/';

// Project settings
module.exports = {
  build: [
    'images',
    'scripts',
    'styles',
    'html'
    //'theme'
  ],
  html: {
    src: [src + '**/*.pug', '!' + src + '**/_*.pug'],
    dest: build,
    option: {
      pretty: true
    }
  },
  images: {
    build: {
      src: src + 'img/**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)',
      dest: build + 'img'
    },
    dist: {
      src: [dist + 'img/**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)', '!' + dist + 'screenshot.png'],
      imagemin: {
        optimizationLevel: 7,
        progressive: true,
        interlaced: true
      }, 
      dest: dist + 'img'
    }
  },
  livereload: {
    port: 35729
  },
  scripts: {
    src: src + 'js/**/*.js',
    dest: build + 'js'
  },
  styles: {
    build: {
      src: src + 'scss/**/*.scss',
      dest: build + 'css'
    },
    dist: {
      src: dist + '**/*.css',
      dest: dist
    },
    autoprefixer: { browsers: ['> 3%', 'last 2 versions', 'ie 9', 'ios 6', 'android 4'] },
    libsass: {
      includePaths: ['./src/scss', bower, modules],
      precision: 6,
      onError: function(err) {
        return console.log(err);
      }
    }
  },
  theme: {
    lang: {
      src:  src + 'languages/**/*',
      dest: build + 'languages/'
    },
    php: {
      src: src + '**/*.php',
      dest: build
    }
  },
  utils: {
    clean: [build+'**/.DS_Store'],
    wipe: [dist],
    dist: {
      src: [build+'**/*', '!'+build+'**/*.map'],
      dest: dist
    }
  },
  watch: {
    src: {
      styles:     src + 'scss/**/*.scss',
      scripts:    src + 'js/**/*(*.js|*.ts)',
      images:     src + '**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)',
      theme:      src + '**/*.php',
      livereload: build + '**/*'
    }
  },
  webpack: {
    devtool: "source-map",
    entry: {
      main: src + 'js/main.ts'
    },
    output: {
      filename: '[name].bundle.min.js'
    },
    resolve: {
      extensions: ['', '.ts', '.tsx', '.js']
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel'
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'ts-loader'
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
      //new webpack.ProvidePlugin({
      //  jQuery: "jquery",
      //  $: 'jquery'
      //})
    ]
  },
  webserver: {
    src: build,
    option: {
      host: 'localhost',
      port: '8000',
      livereload: true,
      open: true
    }
  }
};
