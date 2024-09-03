WebViewer({
  path: 'lib', // path to the PDFTron 'lib' folder on your server
  // licenseKey: 'Insert commercial license key here after purchase',
  initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
  // initialDoc: '/path/to/my/file.pdf',  // You can also use documents on your server
}, document.getElementById('viewer'))
.then(function(instance) {
  const { documentViewer, annotationManager } = instance.Core;
  // call methods from instance, documentViewer and annotationManager as needed

  // you can also access major namespaces from the instance as follows:
  // const Tools = instance.Core.Tools;
  // const Annotations = instance.Core.Annotations;

  // change to dark theme
  instance.UI.setTheme('dark');

  documentViewer.addEventListener('documentLoaded', function() {
    // call methods relating to the loaded document
  });
});
