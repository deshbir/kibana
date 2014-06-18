module.exports = function(config) {
  return {
    // copy source to temp, we will minify in place for the dist build
    almost_everything_to_temp: {
      cwd: '<%= srcDir %>',
      expand: true,
      src: ['**/*', '!**/*.less', '!test/**/*'],
      dest: '<%= tempDir %>'
    },
    copy_to_deploy_dir: {
          cwd: 'dist/',
          src: ['**'],         
          expand: true,
          dest: '<%= pkg.deploy_dir %>'
    }
  };
};