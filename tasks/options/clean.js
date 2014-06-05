module.exports = function(config) {
  return {
    on_start: ['<%= destDir %>', '<%= tempDir %>'],
    temp: ['<%= tempDir %>'],
    docs: ['<%= docsDir %>/kibana'],
    deploy_dir: {
    	src: ['<%= pkg.deploy_dir %>'],
    	options: {
	      force: true
    	}
    }	
  };
};