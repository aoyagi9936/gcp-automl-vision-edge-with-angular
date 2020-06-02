# gcp-automl-vision-edge-with-angular

## The procedure that exported the model

1. Setup `import.csv`
Replace string `<YOUR_CLOUD_STORAGE_BUCKET>` inside `dataset/training/import.csv`

2. Upload training dataset
``` shell
$ cd dataset/training
$ gsutil -m rsync -rd . <YOUR_CLOUD_STORAGE_BUCKET>
```

