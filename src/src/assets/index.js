var model;
async function run() {
  model = await tf.automl.loadImageClassification('./assets/tensorflowjs/img_classification/model.json');
}
async function classify() {
  const image = document.getElementById('target');
  return await model.classify(image);
}
