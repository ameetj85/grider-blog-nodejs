Skaffold API version Update
The v2Alpha3 API version of Skaffold that is used in the course is a few versions behind. Based on all of our recent testing this should still be supported and work without any errors or issues.

skaffold schema list will return the API versions that are supported by the version of Skaffold you have installed.

That said, some students may want to upgrade their skaffold config. There is a very easy way to do this by just running skaffold fix from your terminal:

https://skaffold.dev/docs/references/cli/#skaffold-fix

This will print an updated version of your Skaffold config to the terminal so that you can copy-paste or review and update as needed. This will not automatically update or modify your existing file.

The main difference between the two APIs is that the deploy and kubectl fields no longer exist:

apiVersion: skaffold/v2alpha3
kind: Config
deploy:
kubectl:
manifests: - ./infra/k8s/\*
...
Should now be written as:

apiVersion: skaffold/v4beta3
kind: Config
manifests:
rawYaml: - ./infra/k8s/\*
...
Attached to this lecture is a full example of the course code using the new API as a zip file.

skaffold-api-update.zip
