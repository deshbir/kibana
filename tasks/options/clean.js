module.exports = function(config) {
  return {
    on_start: ['<%= destDir %>', '<%= tempDir %>'],
    temp: ['<%= tempDir %>'],
    docs: ['<%= docsDir %>/kibana'],
    apache_dir: {
    	src: ['<%= pkg.apache_dir %>'],
    	options: {
	      force: true
    	}
    }	
  };
};