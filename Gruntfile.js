module.exports = function(grunt){

grunt.initConfig({

	sass: {                              // Task
	    dist: {                            // Target
	      files: {                         // Dictionary of files
	        'css/main.css': 'scss/main.scss',      // 'destination': 'source'
	      }
	    }
	},
	concat: {
	  js: {
	    src: ['js/main.js', 'js/plugins.js'],
	    dest: 'build/js/scripts.js',
	  },
	  anjs: {
	    src: ['js/app.js',],
	    dest: 'build/js/app.js',
	  },
	  anjsctrl: {
	    src: ['js/controllers.js',],
	    dest: 'build/js/controllers.js',
	  },
	  css: {
	    src: ['css/main.css', 'css/animate.css', 'css/animations.css', 'css/userstyles.css', 'css/bootstrap-image-gallery.min.css','css/blueimp-gallery.min.css'],
	    dest: 'build/css/styles.css',
	  },
	  gallery: {
	  	src:['js/jquery.blueimp-gallery.min.js', 'js/blueimp-gallery-fullscreen.js'],
	  	dest:'build/js/gallery.js',
	  },
	  
	},
	watch: {
	  options: { 
		livereload: true
      },
	  js: {
	    files: ['js/**/*.js'],
	    tasks: ['concat'],
	  },
	  css: {
	    files: ['css/**/*.css'],
	    tasks: ['concat:css'],
	  }, 
	  scss: {
	    files: ['scss/**/*.scss'],
	    tasks: ['sass'],
	  },
	  html:{
	  	files: ['**/*.html'],
	  	tasks: ['concat'],
	  }
	  
	},
	connect: {
    server: {
      options: {
        port: 8080,
        hostname: '*',
        
        }
      }
    }
  

});


grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-connect');

grunt.registerTask('default', ['sass', 'concat' ]);
grunt.registerTask('server', ['connect', 'watch' ]);

};